param (

    [string]$firebaseToken,

    [string]$firebaseProject,

    [string]$buildNumber

)

$dir = Split-Path $MyInvocation.MyCommand.Path

Push-Location $dir


npm i -g firebase-tools

write-host "starting deploy...";

firebase --version;

firebase deploy --token $firebaseToken --project $firebaseProject --message "Build: $buildNumber";

write-host "deployment completed";


Pop-Location
