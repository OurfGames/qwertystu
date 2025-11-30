gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDHomeObjects1= [];
gdjs.Untitled_32sceneCode.GDHomeObjects2= [];
gdjs.Untitled_32sceneCode.GDHomeObjects3= [];
gdjs.Untitled_32sceneCode.GDHomeButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDHomeButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDHomeButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDSocialsObjects1= [];
gdjs.Untitled_32sceneCode.GDSocialsObjects2= [];
gdjs.Untitled_32sceneCode.GDSocialsObjects3= [];
gdjs.Untitled_32sceneCode.GDDevelopersObjects1= [];
gdjs.Untitled_32sceneCode.GDDevelopersObjects2= [];
gdjs.Untitled_32sceneCode.GDDevelopersObjects3= [];
gdjs.Untitled_32sceneCode.GDTransitionObjects1= [];
gdjs.Untitled_32sceneCode.GDTransitionObjects2= [];
gdjs.Untitled_32sceneCode.GDTransitionObjects3= [];
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDasterSocialObjects1= [];
gdjs.Untitled_32sceneCode.GDasterSocialObjects2= [];
gdjs.Untitled_32sceneCode.GDasterSocialObjects3= [];
gdjs.Untitled_32sceneCode.GDchilliSocialObjects1= [];
gdjs.Untitled_32sceneCode.GDchilliSocialObjects2= [];
gdjs.Untitled_32sceneCode.GDchilliSocialObjects3= [];
gdjs.Untitled_32sceneCode.GDtoxSocialObjects1= [];
gdjs.Untitled_32sceneCode.GDtoxSocialObjects2= [];
gdjs.Untitled_32sceneCode.GDtoxSocialObjects3= [];
gdjs.Untitled_32sceneCode.GDjspectSocialObjects1= [];
gdjs.Untitled_32sceneCode.GDjspectSocialObjects2= [];
gdjs.Untitled_32sceneCode.GDjspectSocialObjects3= [];
gdjs.Untitled_32sceneCode.GDalexSocialObjects1= [];
gdjs.Untitled_32sceneCode.GDalexSocialObjects2= [];
gdjs.Untitled_32sceneCode.GDalexSocialObjects3= [];
gdjs.Untitled_32sceneCode.GDdiscordHitObjects1= [];
gdjs.Untitled_32sceneCode.GDdiscordHitObjects2= [];
gdjs.Untitled_32sceneCode.GDdiscordHitObjects3= [];
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1= [];
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects2= [];
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects3= [];
gdjs.Untitled_32sceneCode.GDrobloxHitObjects1= [];
gdjs.Untitled_32sceneCode.GDrobloxHitObjects2= [];
gdjs.Untitled_32sceneCode.GDrobloxHitObjects3= [];
gdjs.Untitled_32sceneCode.GDtwitterHitObjects1= [];
gdjs.Untitled_32sceneCode.GDtwitterHitObjects2= [];
gdjs.Untitled_32sceneCode.GDtwitterHitObjects3= [];


gdjs.Untitled_32sceneCode.asyncCallback11064692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition"), gdjs.Untitled_32sceneCode.GDTransitionObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects3[i].setY(-(2600));
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(11064692, gdjs.Untitled_32sceneCode.asyncCallback11064692);
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save Transition as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11064692(runtimeScene, asyncObjectsList)), 11064692, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback9369252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1920, "", 0);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(9369252, gdjs.Untitled_32sceneCode.asyncCallback9369252);
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDTransitionObjects1) asyncObjectsList.addObject("Transition", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9369252(runtimeScene, asyncObjectsList)), 9369252, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10133740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition"), gdjs.Untitled_32sceneCode.GDTransitionObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects3[i].setY(-(2600));
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(10133740, gdjs.Untitled_32sceneCode.asyncCallback10133740);
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save Transition as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10133740(runtimeScene, asyncObjectsList)), 10133740, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10123260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.camera.setCameraX(runtimeScene, 5760, "", 0);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(10123260, gdjs.Untitled_32sceneCode.asyncCallback10123260);
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDTransitionObjects1) asyncObjectsList.addObject("Transition", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10123260(runtimeScene, asyncObjectsList)), 10123260, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10242276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition"), gdjs.Untitled_32sceneCode.GDTransitionObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects3[i].setY(-(2600));
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(10242276, gdjs.Untitled_32sceneCode.asyncCallback10242276);
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save Transition as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10242276(runtimeScene, asyncObjectsList)), 10242276, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback8858492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.camera.setCameraX(runtimeScene, 9600, "", 0);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(8858492, gdjs.Untitled_32sceneCode.asyncCallback8858492);
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDTransitionObjects1) asyncObjectsList.addObject("Transition", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback8858492(runtimeScene, asyncObjectsList)), 8858492, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.Untitled_32sceneCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDHomeButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDHomeButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDHomeButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDHomeButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDHomeButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Untitled_32sceneCode.GDTransitionObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects1[i].setY(-(2600));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TweenTransition", 2600, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SocialsButton"), gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Untitled_32sceneCode.GDTransitionObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects1[i].setY(-(2600));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TweenTransition", 2600, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DevelopersButton"), gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Untitled_32sceneCode.GDTransitionObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects1[i].setY(-(2600));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TweenTransition", 2600, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Untitled_32sceneCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransitionObjects1[i].setX(-(176));
}
}
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "X: " + gdjs.evtTools.common.toString(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0)) + " Y: " + gdjs.evtTools.common.toString(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 981;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (100), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) <= 4365;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (100), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 980;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 980, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > 4364;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 4363, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("asterSocial"), gdjs.Untitled_32sceneCode.GDasterSocialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDasterSocialObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDasterSocialObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDasterSocialObjects1[k] = gdjs.Untitled_32sceneCode.GDasterSocialObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDasterSocialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://aster.qwertystu.com/", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("chilliSocial"), gdjs.Untitled_32sceneCode.GDchilliSocialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDchilliSocialObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDchilliSocialObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDchilliSocialObjects1[k] = gdjs.Untitled_32sceneCode.GDchilliSocialObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDchilliSocialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://chilli.qwertystu.com/", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("toxSocial"), gdjs.Untitled_32sceneCode.GDtoxSocialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtoxSocialObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtoxSocialObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtoxSocialObjects1[k] = gdjs.Untitled_32sceneCode.GDtoxSocialObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtoxSocialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.tiktok.com/@tox_ade", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jspectSocial"), gdjs.Untitled_32sceneCode.GDjspectSocialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDjspectSocialObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDjspectSocialObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDjspectSocialObjects1[k] = gdjs.Untitled_32sceneCode.GDjspectSocialObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDjspectSocialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtube.com/@Jspect", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("alexSocial"), gdjs.Untitled_32sceneCode.GDalexSocialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDalexSocialObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDalexSocialObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDalexSocialObjects1[k] = gdjs.Untitled_32sceneCode.GDalexSocialObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDalexSocialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://tiktok.com/@alexthetrainlover_69420", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("discordHit"), gdjs.Untitled_32sceneCode.GDdiscordHitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDdiscordHitObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDdiscordHitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDdiscordHitObjects1[k] = gdjs.Untitled_32sceneCode.GDdiscordHitObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDdiscordHitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://discord.gg/gAq7HB37EF", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("youtubeHit"), gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1[k] = gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtube.com/@qwertystu", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("robloxHit"), gdjs.Untitled_32sceneCode.GDrobloxHitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDrobloxHitObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDrobloxHitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDrobloxHitObjects1[k] = gdjs.Untitled_32sceneCode.GDrobloxHitObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDrobloxHitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://roblox.com/communities/602010468", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("twitterHit"), gdjs.Untitled_32sceneCode.GDtwitterHitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtwitterHitObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtwitterHitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtwitterHitObjects1[k] = gdjs.Untitled_32sceneCode.GDtwitterHitObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtwitterHitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://x.com/qwertystu", runtimeScene);
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDHomeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHomeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHomeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDasterSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDasterSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDasterSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDchilliSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDchilliSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDchilliSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtoxSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtoxSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtoxSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDjspectSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDjspectSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDjspectSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDalexSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDalexSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDalexSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDdiscordHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdiscordHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdiscordHitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDrobloxHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrobloxHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDrobloxHitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtwitterHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtwitterHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtwitterHitObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
gdjs.Untitled_32sceneCode.GDHomeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHomeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHomeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHomeButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSocialsButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDevelopersButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDasterSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDasterSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDasterSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDchilliSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDchilliSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDchilliSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtoxSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtoxSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtoxSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDjspectSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDjspectSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDjspectSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDalexSocialObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDalexSocialObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDalexSocialObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDdiscordHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdiscordHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdiscordHitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDyoutubeHitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDrobloxHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrobloxHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDrobloxHitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtwitterHitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtwitterHitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtwitterHitObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
