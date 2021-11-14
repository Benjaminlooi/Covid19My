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

> Update (Oct 2021), if the previous command doesn't work on windows, u have to do this

```shell
git push heroku `git subtree split --prefix pythonapp master`:master --force
You can just run the nested bit first:

git subtree split --prefix pythonapp master
This will (after a lot of numbers) return a token, e.g.

ddd50c242380a3a1acd1912ac4798f7e8af506ac
Use this in the containing command, e.g:

git push heroku ddd50c242380a3a1acd1912ac4798f7e8af506ac:master --force
```

> If things does not work, just Force it. - Benjamin Looi, 2021
