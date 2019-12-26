# Dog-Walker
**Dog-Walker** is a Fitbit Ionic and Versa Exercise App for Dog Walking. **Dog-Walker** uses [Fitbit SDK V3.2.0](https://github.com/Fitbit). Cloned from [SDK-Exercise](https://github.com/Fitbit/sdk-exercise) "Skateboard" by [@Fitbit/orviwan](https://github.com/Fitbit). **Dog-Walker** [updates](https://github.com/princessleia1/dog-walker/issues) include support for Versa, Dog Walking Activity via Exercise Tracking, Steps Activity, and Dog-Walker Tips View. Work In Progress.

## Devices
**Dog-Walker** is built for Fitbit Devices: Ionic (348x250) and Versa (300x300).
<p align="left">
  <img width="130" height="130" src=./screenshots/dog-walker-versa-1.png>
  <img width="130" height="130" src=./screenshots/dog-walker-versa-10.png>
  <img width="130" height="130" src=./screenshots/dog-walker-versa-8.png>
  <img width="130" height="130" src=./screenshots/dog-walker-versa-9.png>
  <img width="130" height="130" src=./screenshots/dog-walker-versa-4.png>
  <img width="130" height="130" src=./screenshots/dog-walker-versa-5.png>
</p>

## Features
**Dog-Walker** records the following statistics during your Dog Walking exercise session:

* **Active Time** (Number of Minutes).
* **Steps** taken (Number of Steps).
* **Distance** travelled in US or Metric.
* **Heart Rate Average** in BPM (Beats Per Minute).
* **Heart Rate Maximum** in BPM (Beats Per Minute).
* **Calories** burned (Number of Calories in kcal).

**Dog-Walker** displays random 'Dog Walking Tips' such as:

> ***Let Your Dog Sniff and Explore:***
> *Dogs have up to 300 million scent receptors in their nose, depending on the breed.*
> *Reward short bursts of heeling or loose leash walking with frequent sniffing sessions to help foster good walking behavior.*
> *[Stephanie Gibeault, MSc, CPDT](https://www.akc.org/expert-advice/training/ways-you-might-be-ruining-your-dogs-walk).*-

## Devices
**Dog-Walker** is built for Fitbit Devices: Ionic (348x250) and Versa (300x300).

**Dog-Walker** updates for new Versa 2 Device Compatibility in progress.

### TODO:
- [x] Update Icon to match Primary Colour
- [ ] Update Stying on all Views
- [ ] Update UI Components
- [ ] Add Steps Activity
- [x] Add Dog Walking Tips View
- [ ] Remove Speed Avg, Max
- [x] Add Versa Support and updates for new SDK
- [ ] Add Full Width 'Done' Button to End View
- [ ] Optimise Scripts
- [ ] Update Screenshots to include Versa 2 Device
- [ ] Update index.js, CSS, GUI Files for new Versa 2 Device compatibility.

## Build
**Pre-requisites:**
* Install [Node.js](https://nodejs.org/en/download/) 8.x+ on macOS, Windows or Linux.
* ```git clone https://github.com/princessleia1/dog-walker.git ```
* Edit package.json file and add the Fitbit CLI dependencies:
```
"devDependencies": {
   "@fitbit/sdk": "^3.1.2",
   "@fitbit/sdk-cli": "^1.7.0"
}
```
* Developer Bridge on Mobile Device and Fitbit Device connected.

## Install
Using Fitbit SDK CLI Tool via ```Console```:

```
npm add @fitbit/sdk
npm add @fitbit/sdk-cli
npx fitbit-build generate-appid
npx fitbit-build
npx fitbit
fitbit$ install
```
## Attribution
Attribution Background [Image](https://tse2.mm.bing.net/th?id=OIP.VFX2ieQjgDzMX3duS4n-cwHaFG&pid=Api) is Licensed Under [Creative Commons Attribution 4.0 License.](https://creativecommons.org/licenses/by/4.0/)

## License
**Dog-Walker** App is licensed under the terms of the [GPL-3.0 License](/LICENSE). 

<p align="middle">
<img width="80" height="80" src=./resources/logo.png>
</p>
