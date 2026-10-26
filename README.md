# Rogue . AI

A simple, filterable table of AI incidents. Data loads live from the Google Sheet on every page view, so editing the sheet updates the site.

Live: https://kunalssingh.com/rogue.ai/

The **Unknown model** button groups existing unknown, undisclosed and unnamed model labels at display time. It also includes agent frameworks whose underlying model is unknown. Known model families with only an unknown version or checkpoint remain identified. The filter combines with company, category and search filters; **Clear filters** restores all rows. Sheet values and headers are not rewritten.

Run the model-label boundary checks with `node scripts/model-filter.test.mjs`.
