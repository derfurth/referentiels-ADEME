#!/bin/sh

echo "Essaye avec curl de télécharger les noms depuis la vue collectivite_card."

curl -X GET \
     -H "apikey: $ANON_KEY" \
     -H "Authorization: Bearer $ANON_KEY" \
     -H "Accept: text/csv" \
"$URL/rest/v1/collectivite_card?select=nom"
