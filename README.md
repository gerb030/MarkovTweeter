# MarkovTweeter
A generic library that generates tweets using Markov Chains based on an existing twitter feed


## Send a generated tweet
This function generates a random sentence and 
`index.js send [username] [file containing inputtext, per line] [consumer_key] [consumer_secret] [access_token] [access_token_secret]`
For example
`index.js send mytwitterusername tweets2.txt 7En8ef89FEFE3Un6fe7ufenfi iuqGWK2Jfo5Eij7Emo8w8gpqw8e56o85g68G45f7ew7GEGEgWE 2893590259025903902-U234235I235Fe6wu6i6uhfuho2352A koE15EpqwAAdpoqdGEok6qg6434634ewSSQmkl6opwEEHE4636`

## Test for valid output
This function outputs a sample sentence and performs twitter verification. It is designed as a verification of your setup.
`index.js test [username] [file containing inputtext, per line] [consumer_key] [consumer_secret] [access_token] [access_token_secret]`
For example
`index.js test mytwitterusername tweets2.txt 7En8ef89FEFE3Un6fe7ufenfi iuqGWK2Jfo5Eij7Emo8w8gpqw8e56o85g68G45f7ew7GEGEgWE 2893590259025903902-U234235I235Fe6wu6i6uhfuho2352A koE15EpqwAAdpoqdGEok6qg6434634ewSSQmkl6opwEEHE4636`	