******************************************************************************************************
******************************************************************************************************
3D UI and Augmented Reality -Spring 2018 - Final Project - README


Group 7 - How is it Made?
******************************************************************************************************
******************************************************************************************************


a. Team Name - Typecast


b. Names and UNI - 
        Edith Comas (eoc2106)
        Sara Samuel (sas2361)
        Shreya Vaidyanathan (sv2525)
        Vivien Ngo (vn2260)


c. Date of submission - May 8th 2018


d. Development platform(s) - Mac - OSX (XCode)


e. Mobile platform(s) - iPhone 7 (iOS 11)


f. Project title - Typecast


g. Project directory overview - 
* Our project directory contains multiple folders:
   * “AS_ModernMenu1”: Empty folder
   * “Cursor”: Contains scripts, materials and textures used to create the cursor in our project
   * “Images”: Contains images that we used in our “Gallery” display (our final waypoint)
   * “Materials”: Contains all the materials for the models in our scene
   * “Models”: Contains models that we got from outside sources (clock, pyroparticles, fireFX, waterFX), as well as the Vuforia Mars image target folder
   * “Package”: Contains a metal material and a WaterFX sample scene from the imported asset
   * “Plugins”: Contains a gitHub for Unity plugin
   * “Scripts”: Contains scripts for animation timing, caption timing, menu control, rotation, showing/hiding the gallery, and slider control
   * “Scrolling Assets”: Contains prefabs for the models that have textbox scrolling functionality
   * “Sky FX Pack”: An imported Unity package from the Asset Store
   * “TextMesh Pro”: An imported package used to achieve scrolling functionality in textboxes
   * “UnityARKitPlugin”: The ARKit plugin we downloaded to achieve ARKit functionality


h. Special instructions, if any, for deploying your app 
* The application requires an iPhone/iPad that can run ARKit.  
* Make sure to build and run the scene called UnityARKitScene (the path is UnityARKitPlugin/Examples/UnityARKitScene/UnityARKitScene)


i. Special instructions, if any, for preparing your targets - We have no image targets as we used ARKit.


j. Video URL - https://www.youtube.com/watch?v=LHluRfjWgGk


k. Instructions for using your app (please include a reminder of which targets to use) - 
* Users need to first detect a ground plane. Yellow particle effects appear to show the detection of features. A blue rectangular box will appear when a ground plane is detected. Then tap the screen within the blue box to place the models in space properly. 
* Do not tap on the screen prior to detecting a ground plane. Otherwise, the models will not appear at the correct positions within the space (This is a constraint imposed by ARKit)
* If you do happen to tap on the screen prior to detecting a ground plane, you must close the app and re-open it. 
* The first model you see should be the leaf in the clay base (labeled ‘1’ above the model).  


l. Missing features - N/A


m. Bugs in your code and Unity - 
* As mentioned earlier, if the user taps on the screen prior to detecting a ground plane, the models will not appear at the proper positions. 
* When doing scaling, the models sometimes rotate and scale simultaneously as the finger input is detected. 


n. Asset sources -
- ARKit Plugin from the unity asset store (https://assetstore.unity.com/packages/essentials/tutorial-projects/unity-arkit-plugin-92515)
- Model for green leaf based on this image from (http://pngimg.com/imgs/nature/green_leaves/)
- Cursor for interaction (similar to the functionality in Hololens) from (https://docs.microsoft.com/en-us/windows/mixed-reality/holograms-101e)
- FX for animation using "Sky FX Pack" by UNITY TECHNOLOGIES from the unity asset store (https://assetstore.unity.com/packages/vfx/particles/environment/sky-fx-pack-19242)
- Scroll boxes using the "TextMesh Pro" by UNITY TECHNOLOGIES from the unity asset store (https://assetstore.unity.com/packages/essentials/beta-projects/textmesh-pro-84126)
- Sprite for UI using "3D Modern Menu 1" by ANDREI N. SHULGACH from the unity asset store (https://assetstore.unity.com/packages/2d/gui/icons/3d-modern-menu-1-116144)
- Model for sand and metal jugs from Turbosquid.com
(https://www.turbosquid.com/3d-models/3d-print-roman-pottery-model/939010)
- “Water FX Pack” (we ended up not using this in the project) from Unity Asset Store
(https://assetstore.unity.com/packages/vfx/particles/environment/water-fx-pack-19248)
-”PyroParticles (did not end up using) from Unity Asset Store
(https://assetstore.unity.com/packages/vfx/particles/fire-explosions/fire-spell-effects-36825)
-”Clock” (did not end up using) from Unity Asset Store
(https://assetstore.unity.com/packages/3d/props/interior/clock-4250)