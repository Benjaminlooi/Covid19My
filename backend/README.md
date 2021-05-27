# Covid19my Backend

## Developing

### Pushing to heroku

> Add heroku remote repo

```shell
heroku git:remote -a covid19my-api
```

> Deploy project to heroku

```shell
git push heroku master
```

```shell
git push heroku `git subtree split --prefix backend master`:master --force
```
