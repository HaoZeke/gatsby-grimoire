---
title: "Restoring an Old OnePlus 2"
date: 2018-11-25
author: "Rohit Goswami"
tags: ["android", "legacy", "frustration"]
published: true
---

This post is also [on Medium](https://medium.com/@HaoZeke/restoring-an-old-oneplus-2-4bc94ffa5bdb).

# Booting a ROM

Apparently, OnePlus was supposed to have really great support for custom roms.
This I knew because when I got the OPO2 (OnePlus 2), there were a lot of great
kernel developers working on it, like Franco.

Fast forward to this day and age and the device is a mess. Ages ago in a bid for
stability, I had opted for the official (Chinese) Hydrogen OS roms, which were
eventually frozen out at Marshmallow (Android v. 6.xx). Unsurprisingly, this
meant that the phone was not performing well at all. 


## Getting TWRP
Trying to flash a custom recovery was a complete disaster. The only one which
was willing to boot was v2.8.7.0, which was not able to install the latest LOS
(v 15.xx, Android 8.xx).

# Update Instructions
Since the rant was getting long I will get back to that later. Right now the
**exact** steps to get to the latest Android version (Pie, 9.xx** is simply as
shown in the sections below.

**NOTE:** The key combination for booting into *flashmode* is `VOL UP + Power`.
For *recovery* it is `VOL DOWN + Power`

Also note that the above instructions for booting into *flashmode* and
*recovery* means hold both keys until the logo shows, then just hold the
appropriate `VOL` button. **LET GO OF THE POWER BUTTON**.

## Downgrade to Lollipop
Grab the recovery set of fastboot files from this [oneplus 2 thread](https://forums.oneplus.com/threads/return-op2-to-100-stock-unbrick-soft-bricked-op2-oxygenos-2-1-1-fastboot-images.388967/).

Then either run the `.bat` file on Windows, or input each command into the
terminal if you're on a \*nix device.

Very specifically, this means:

1. Grab [this MEGA link](https://mega.nz/#!itR00ZaI!gJ6T0jgqfZaIF9NLlCzWj4LIGMMhCw8m8owFdeB_2B4)
2. Extract the file

``` bash
fastboot flash boot boot.img
fastboot flash system system.img

rem fastboot erase recovery

fastboot flash cache cache.img
fastboot flash modem NON-HLOS.bin
fastboot flash sbl1 sbl1.mbn
fastboot flash sdi sdi.mbn
fastboot flash pmic pmic.mbn
fastboot flash hyp hyp.mbn
fastboot flash bluetooth BTFM.bin
fastboot flash aboot emmc_appsboot.mbn
fastboot flash rpm rpm.mbn
fastboot flash tz tz.mbn
fastboot flash LOGO logo.bin
fastboot flash oem_stanvbk static_nvbk.bin
rem fastboot flash userdata userdata_64g.img

rem fastboot reboot
```

## Get to TWRP
At this point your opo2 should boot, but not do much else. Now we will work our
way through to getting a viable custom recovery since the oneplus default is
**terrible**.

We will be using the [official TWRP link](https://dl.twrp.me/oneplus2/) along with a special [cross bootloader
compatible TWRP](https://forum.xda-developers.com/showpost.php?p=66757023&postcount=5).

This means:

1. Grab the oldest booting TWRP (v2.8.7.0) from [this link](https://dl.twrp.me/oneplus2/twrp-2.8.7.0-oneplus2.img.html).

``` bash
fastboot flash recovery twrp-2.8.7.0-oneplus2.img
fastboot boot twrp-2.8.7.0-oneplus2.img
```

2. Now we can get a more forward thinking (i.e, one with no **trust zone
   errors**) TWRP from [here](https://www.androidfilehost.com/?fid=24421527759880815).
   
This needs to be copied into your device and flashed with the TWRP already
installed in the previous step.

## Update Firmware
At this point we still can't actually install any custom roms, which is
important since once that works everything else will fall into place. The
remaining step is to grab a firware update (from Oxygen OS 3) which will work.

Specifically:
1. Grab [this firmware zip file](https://www.androidfilehost.com/?fid=673791459329056816).
2. Flash it (`OOS_3.6.1_Firmware.zip`) in the hybrid TWRP obtained before this.

## Get CyanogenMod
Finally, we can now move to CyanogenMod 13, which is the most stable custom ROM
around. True, it has been depreciated (legacy continued by LineageOS) and is
still based off Marshmallow  (Android v. 6.xx) but it's a HUGE update.

Wherever `gapps` are mentioned, remember that this is an `arm64` device.

1. Grab the latest version from [this MEGA folder](https://mega.nz/#F!cdMV0YKB!8QbGtcioPGcKhyoYgHyXaw).
2. In my case this was `cm-13.0-20161114-NIGHTLY-oneplus2.zip`
3. Flash this in TWRP.
4. Flash [Gapps](https://opengapps.org/?api=6.0&variant=nano) immediately afterwards (DO not boot).
5. Flash [SuperSU](https://www.androidfilehost.com/?fid=745425885120746304).

Optionally, even though most kernels are EOL (end-of-life) for this particular
version (and the device in general), the [Boeffla kernel](https://kernel.boeffla.de/oneplus2/boeffla-kernel-cm/cm13.0_download/Stable/boeffla-kernel-5.3-CM13.0-OnePlus2-anykernel.recovery.zip) is great.

Profit.

## LineageOS
At this stage we can flash anything (almost). Let us get to the bleeding edge
(Android 8.1, LineageOS 15.1) of stable OPO2 development one ROM at a time.

1. Grab the latest TWRP (v3.2.1) from [this link](https://dl.twrp.me/oneplus2/twrp-3.2.1-0-oneplus2.img.html).
2. Install this as an image in the old TWRP
3. Reboot into the now shockingly chinese TWRP (change to English with [this guide](https://www.teamandroid.com/2017/04/30/change-twrp-recovery-language-english/))
4. Download [LineageOS 15.1](https://download.lineageos.org/oneplus2), [Gapps](https://opengapps.org/?api=8.1&variant=nano) and the [superuser addon](https://download.lineageos.org/extras).
5. Flash them all at once.

Pie (Android 9, LineageOS 16) does not really seem to be all too stable right
now, so I will stop here. Additionally, the [unified arctic kernel](https://forum.xda-developers.com/oneplus-2/development/kernel-arctic-kernel-t3830619) seems pretty good.
