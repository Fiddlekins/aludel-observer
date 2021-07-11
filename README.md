# aludel-observer

Tool to log rewards over time.

## setup

The `secrets-example` folder should be copied by the user with the copy renamed to `secrets`.

The contents must then be edited to provide valid API keys and desired target crucible address.

`etherscanApiKey` is only used by `npm run build` command, so can likely be skipped.

## usage

`npm run start` to set it off.

An output folder will be created with `.tsv` files saved off for each reward program the target crucible is part of.

The output `.tsv` files have the timestamp of first save included in their filename so that stopping and restarting the tool does not overwrite previous session data.

`npm run build` can be used to refresh the contract ABIs by automatically retrieving them from Etherscan, but it is unlikely you will need to do this.

The default poll rate is 20 samples per day. This can be adjusted by editing the `pollRate` variable in `index.js`.

Output `.tsv` files can be opened with a text editor, and their content pasted into a spreadsheet.
Google Sheets in particular will automatically split it across columns properly.
