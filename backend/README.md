# Covid19my Backend

## Developing

### Pushing to heroku

> Add heroku remote repo

```shell
heroku git:remote -a covid19my-api
```

> Deploy project to heroku (If repository is the code)

```shell
git push heroku master
```

> But in this repository case, both bathend and frontend folders are in it

```shell
git push heroku `git subtree split --prefix backend master`:master --force
```

> Update (Oct 2021), previous command seems outdated and git subtree is built into git no. Use this instead

```shell
git subtree push --prefix backend heroku master
```

> If things does not work, just Force it. - Benjamin Looi, 2021
