<<<<<<< HEAD
echo "changing file permissions"
chmod +x .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/launch_nightwatch*.sh
chmod +x .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/selenium/selenium-server-standalone-2.42.0.jar

echo "installing nightwatch in .meteor/local/build"
  cd .meteor/local/build
  sudo npm install nightwatch@0.5.3
  cd ../../..

echo "running nightwatch"
   sudo .meteor/local/build/node_modules/nightwatch/bin/nightwatch -c .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/nightwatch_from_app_root.json $1 $2
=======
echo "changing file permissions"
chmod +x .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/launch_nightwatch*.sh
chmod +x .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/selenium/selenium-server-standalone-2.42.0.jar

echo "installing nightwatch in .meteor/local/build"
  cd .meteor/local/build
  sudo npm install nightwatch@0.5.3
  cd ../../..

echo "running nightwatch"
   sudo .meteor/local/build/node_modules/nightwatch/bin/nightwatch -c .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/nightwatch_from_app_root.json $1 $2
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
