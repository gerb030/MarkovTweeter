# MarkovTweeter
A generic library that generates tweets using Markov Chains based on an existing twitter feed. I've personally set this up as a cron job.

There are three public functions in the script that you can trigger:

* the keyword `read` will collect up to 200 tweets from any public Twitter account.
* the keyword `send` will send a generated tweet.
* the keyword `test` will verify that the setup criteria are met, both Twitter auth and Markov chain-based generation.

## Installation instructions
This tool requires `npm` and `node` to be installed.

1. Install the Twit library: `npm install twit`
2. Rita is required for out of the box markov chain generation: `npm install rita`

## Read tweets
`index.js read [username] [file for storing tweets found, one per line] [start_number] [consumer_key] [consumer_secret] [access_token] [access_token_secret]`
This function will output the highest id found to STDOUT.


## Send a generated tweet
This function generates a random sentence and tweets this on the given account:
 
`index.js send [username] [file containing inputtext, per line] [consumer_key] [consumer_secret] [access_token] [access_token_secret]`


For example:

`index.js send mytwitterusername tweets2.txt 7En8ef89FEFE3Un6fe7ufenfi iuqGWK2Jfo5Eij7Emo8w8gpqw8e56o85g68G45f7ew7GEGEgWE 2893590259025903902-U234235I235Fe6wu6i6uhfuho2352A koE15EpqwAAdpoqdGEok6qg6434634ewSSQmkl6opwEEHE4636`

## Test for valid output
This function outputs a sample sentence and performs twitter verification. It is designed as a verification of your setup.

`index.js test [username] [file containing inputtext, per line] [consumer_key] [consumer_secret] [access_token] [access_token_secret]`


For example

`index.js test mytwitterusername tweets2.txt 7En8ef89FEFE3Un6fe7ufenfi iuqGWK2Jfo5Eij7Emo8w8gpqw8e56o85g68G45f7ew7GEGEgWE 2893590259025903902-U234235I235Fe6wu6i6uhfuho2352A koE15EpqwAAdpoqdGEok6qg6434634ewSSQmkl6opwEEHE4636`	