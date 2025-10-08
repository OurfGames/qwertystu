gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];


gdjs.Untitled_32sceneCode.asyncCallback9317036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9317036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback9316396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Bigger", 65, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9316396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback9319476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9319476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback9318708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Bigger", 65, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9318708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Untitled_32sceneCode.GDNewTextObjects1});
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Smaller", 60, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "repeater", 1, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].getBehavior("Tween").addTextObjectCharacterSizeTween2("Smaller", 60, "easeInOutQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewTextObjects1Objects, null);
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
