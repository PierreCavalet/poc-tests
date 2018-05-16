## Usage

This command start a docker which:
- Launch the server
- Run unit tests
- Run e2e tests

```sh
npm run test
```

- Run browserstack test on the heroku hosted app

Add your browserstack user/key to your environment variables in your .bashrc

```
export BROWSERSTACK_USER=myuser
export BROWSERSTACK_KEY=mykey
```

Produce a screenshot in `reports/`
Produce code coverage report in `coverage/`
Produce a video of the end to end testing in `videos/`
