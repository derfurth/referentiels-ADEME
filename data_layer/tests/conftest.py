import os
from urllib.parse import urlparse

import psycopg
import pytest
import supabase
from dotenv import load_dotenv
from psycopg import Connection
from psycopg.rows import dict_row

from fake_layers.fake_client import Client
from tests.utils.sql_factories import make_sql_truncate_all_tables

load_dotenv()
postgres_port = os.getenv("POSTGRES_PORT", 50001)
supabase_url = os.getenv("SUPABASE_URL", "")
supabase_key = os.getenv("SUPABASE_KEY", "")
postgres_url = (
    f"postgresql://supabase_admin:yolododo@localhost:{postgres_port}/postgres"
)


@pytest.fixture()
def postgres_connection_params() -> dict:
    db_params = urlparse(postgres_url)

    return dict(
        dbname=db_params.path[1:],
        user=db_params.username,
        password=db_params.password,
        host=db_params.hostname,
        port=db_params.port,
    )


@pytest.fixture()
def postgres_connection(postgres_connection_params) -> Connection:
    return psycopg.connect(**postgres_connection_params)


@pytest.fixture()
def supabase_client() -> supabase.Client:
    """Return the default supabase"""
    # here we use a client with a service role for both client and business layers.
    return supabase.create_client(supabase_url, supabase_key)


@pytest.fixture()
def app_client(supabase_client) -> Client:
    return Client(supabase_client)


def clear_cursor(cursor):
    cursor.execute(make_sql_truncate_all_tables())
    cursor.connection.commit()


@pytest.fixture()
def cursor(postgres_connection: Connection, request):
    cursor = postgres_connection.cursor(row_factory=dict_row)
    clear_cursor(cursor)

    def clear_and_close_cursor():
        clear_cursor(cursor)
        cursor.close()

    request.addfinalizer(clear_and_close_cursor)
    return cursor
