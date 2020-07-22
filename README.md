

# This Figma plugin was built in order to use a different kebyoard shortcut for a Select Parents feature.

Figma has this useful feature which selects parent groups/frames of your currently selected elements. It is available under `⇧ + ↵ Enter`. I find the Sketch implementation more convinient though: Sketch let's you select parents while pressing esc instead of canceling a selection right away.

It is not possible at the moment to change keyboard shortcuts in Figma, and Select Parents is not currently located among Figma's menu items. So I found another way. I built this plugin, which mimics Select Parents feature, thus adding it to menu items. Now it is possible to map a shortcut to it in MacOS.

**How to use Select Parents under a different shortcut in MacOS:**
1. Download the code
2. In Figma go to Plugins → Development → New Plugin...
3. Locate and upload the manifest.json
4. Go to System Preferences → Keyboard → Shortcuts
5. In the Shortcuts interface click on App Shortcuts and then click on `+`
6. In the add shortcut modal, Select Figma as Application, enter "Parent Selection" as a Menu Title and choose your prefered Keyboard Shortcut (I like `⌘ + esc`).