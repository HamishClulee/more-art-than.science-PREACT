#!/usr/bin/env bash
echo "---------------------- Building locally. ---------------------------------------"
rm -R $PWD/dist/
mkdir $PWD/dist/
npx parcel build index.html
echo "---------------------- Copying static assets to /server. -----------------------"
DATE=`date '+%Y-%m-%d %H:%M:%S'`
rm -R $PWD/server/public
mkdir $PWD/server/public
cp -a $PWD/dist/. $PWD/server/public
echo "---------------------- Pushing to GIT. -----------------------------------------"
git add .
MSG=". Deployed: $DATE"
git commit -m "$1 $MSG"
git push
echo "---------------------- Deploying to more-art-than.science. ---------------------"
ssh hamishclulee@206.189.83.217 'cd /var/www/more-art-than.science && git reset --hard && git pull && sudo systemctl restart mats.service'
echo "---------------------- Deploy complete. Happy Face. ----------------------------"