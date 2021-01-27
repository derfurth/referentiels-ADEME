import glob
import os

import typer

from codegen.citergie.generator import write_citergie_outputs
from codegen.codegen.generator import write_outputs
from codegen.utils import load_md

app = typer.Typer()


@app.command()
def mesures(
    markdown_dir: str = typer.Option('referentiels/extracted/citergie', "--markdown", "-md"),
    output_dir: str = typer.Option('generated/citergie', "--output", "-o"),
    html: bool = True,
    json: bool = True,
    js: bool = True,
) -> None:
    """
    Convert 'mesures' markdown files to code.
    """
    files = glob.glob(os.path.join(markdown_dir, '*.md'))
    with typer.progressbar(files) as progress:
        for filename in progress:
            md = load_md(filename)
            write_citergie_outputs(md, output_dir, json=json, js=js, html=html)
    typer.echo(f"Processed {len(files)} 'mesures'.")


@app.command()
def shared(
    markdown_dir: str = typer.Option('definitions/shared', "--markdown", "-md"),
    output_dir: str = typer.Option('generated/definition/shared', "--output", "-o"),
    python: bool = True,
    js: bool = True,
) -> None:
    """
    Generate shared definitions.
    """
    files = glob.glob(os.path.join(markdown_dir, '*.md'))
    with typer.progressbar(files) as progress:
        for filename in progress:
            typer.echo(f'Processing {filename}...')
            md = load_md(filename)
            write_outputs(md, output_dir, js=js, python=python)
    typer.echo(f"Processed {len(files)} shared definitions.")
