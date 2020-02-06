# Seeing Your Remotes
* By running the git remote command, you can view the short names, such as “origin,” of all specified remote handles.

* By using git remote -v, you can view all the remote URLs next to their corresponding short names.


$ cd example
$ git remote -v

remote1 https://github.com/remote1/example (fetch)

remote1 https://github.com/remote1/example (push)

remote2 https://github.com/remote2/example (fetch)

remote2 https://github.com/remote2/example (push)

remote3 https://github.com/remote3/example (fetch)

remote3 https://github.com/remote3/example (push)

# Adding Remotes

**git remote add shortname url**

for ex :

$ git remote
origin
$ git remote add js https://github.com/janesmith/project1
$ git remote -v
origin https://github.com/johndoe/project1 (fetch)
origin https://github.com/johndoe/project1 (push)
js     https://github.com/janesmith/project1 (fetch)
js     https://github.com/janesmith/project1 (push)

## Fetching

Fetching entails pulling data that you don’t have from a remote project.

**Here is the command format:**

git fetch [remote-name]

## Pushing
To push your changes “upstream” for sharing, you would use the following git push command format:

git push [remote-name][branch-name] for ex :*$ git push origin master*

## Renaming/Removing Remotes
Rename
To rename a remote’s short name, use the git remote rename command.
To remove a remote for whatever reason simply use the git remote rm command.

## Commit Mistakes
You can use the –amend command when you need to alter a commit message or forgot to add some files.
ex:
$ git commit --amend
