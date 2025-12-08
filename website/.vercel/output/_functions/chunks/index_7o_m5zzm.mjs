import { c9 as signal } from './MiniRepl_Ntj7iAxy.mjs';

// motion.mjs


/**
 *  Значение акселерометра по оси x в диапазоне от 0 до 1.
 * @name accelerationX
 * @return {Pattern}
 * @synonyms accX
 * @example
 * n(accelerationX.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение акселерометра по оси y в диапазоне от 0 до 1.
 * @name accelerationY
 * @return {Pattern}
 * @synonyms accY
 * @example
 * n(accelerationY.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение акселерометра по оси z в диапазоне от 0 до 1.
 * @name accelerationZ
 * @return {Pattern}
 * @synonyms accZ
 * @example
 * n(accelerationZ.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение гравитации устройства по оси x в диапазоне от 0 до 1.
 * @name gravityX
 * @return {Pattern}
 * @synonyms gravX
 * @example
 * n(gravityX.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение гравитации устройства по оси y в диапазоне от 0 до 1.
 * @name gravityY
 * @return {Pattern}
 * @synonyms gravY
 * @example
 * n(gravityY.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение гравитации устройства по оси z в диапазоне от 0 до 1.
 * @name gravityZ
 * @return {Pattern}
 * @synonyms gravZ
 * @example
 * n(gravityZ.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение вращения устройства вокруг оси alpha в диапазоне от 0 до 1.
 * @name rotationAlpha
 * @return {Pattern}
 * @synonyms rotA, rotZ, rotationZ
 * @example
 * n(rotationAlpha.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение вращения устройства вокруг оси beta в диапазоне от 0 до 1.
 * @name rotationBeta
 * @return {Pattern}
 * @synonyms rotB, rotX, rotationX
 * @example
 * n(rotationBeta.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение вращения устройства вокруг оси gamma в диапазоне от 0 до 1.
 * @name rotationGamma
 * @return {Pattern}
 * @synonyms rotG, rotY, rotationY
 * @example
 * n(rotationGamma.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение ориентации устройства alpha в диапазоне от 0 до 1.
 * @name orientationAlpha
 * @return {Pattern}
 * @synonyms oriA, oriZ, orientationZ
 * @example
 * n(orientationAlpha.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение ориентации устройства beta в диапазоне от 0 до 1.
 * @name orientationBeta
 * @return {Pattern}
 * @synonyms oriB, oriX, orientationX
 * @example
 * n(orientationBeta.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение ориентации устройства gamma в диапазоне от 0 до 1.
 * @name orientationGamma
 * @return {Pattern}
 * @synonyms oriG, oriY, orientationY
 * @example
 * n(orientationGamma.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение абсолютной ориентации устройства alpha в диапазоне от 0 до 1.
 * @name absoluteOrientationAlpha
 * @return {Pattern}
 * @synonyms absOriA, absOriZ, absoluteOrientationZ
 * @example
 * n(absoluteOrientationAlpha.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение абсолютной ориентации устройства beta в диапазоне от 0 до 1.
 * @name absoluteOrientationBeta
 * @return {Pattern}
 * @synonyms absOriB, absOriX, absoluteOrientationX
 * @example
 * n(absoluteOrientationBeta.segment(4).range(0,7)).scale("C:minor")
 *
 */

/**
 *  Значение абсолютной ориентации устройства gamma в диапазоне от 0 до 1.
 * @name absoluteOrientationGamma
 * @return {Pattern}
 * @synonyms absOriG, absOriY, absoluteOrientationY
 * @example
 * n(absoluteOrientationGamma.segment(4).range(0,7)).scale("C:minor")
 *
 */

class DeviceMotionHandler {
  constructor() {
    this.GRAVITY = 9.81;

    // Initialize sensor values
    this._acceleration = {
      x: 0,
      y: 0,
      z: 0,
    };

    this._gravity = {
      x: 0,
      y: 0,
      z: 0,
    };

    this._rotation = {
      alpha: 0,
      beta: 0,
      gamma: 0,
    };

    this._orientation = {
      alpha: 0,
      beta: 0,
      gamma: 0,
    };

    this._absoluteOrientation = {
      alpha: 0,
      beta: 0,
      gamma: 0,
    };

    this._permissionStatus = 'unknown';
  }

  async requestPermissions() {
    if (typeof DeviceMotionEvent?.requestPermission === 'function') {
      try {
        // iOS requires explicit permission
        const motionPermission = await DeviceMotionEvent.requestPermission();
        const orientationPermission = await DeviceOrientationEvent.requestPermission();

        this._permissionStatus =
          motionPermission === 'granted' && orientationPermission === 'granted' ? 'granted' : 'denied';
        this.setupEventListeners();
      } catch (error) {
        console.error('Permission request failed:', error);
        this._permissionStatus = 'denied';
      }
    } else {
      this._permissionStatus = 'granted';
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    if (this._permissionStatus === 'granted') {
      // Device Motion handler
      window.addEventListener('devicemotion', this.handleDeviceMotion.bind(this), true);
      window.addEventListener('deviceorientation', this.handleDeviceOrientation.bind(this), true);
      window.addEventListener('deviceorientationabsolute', this.handleAbsoluteDeviceOrientation.bind(this), true);
    }
  }

  handleDeviceMotion(event) {
    //console.log(event);
    if (event.acceleration) {
      // Normalize acceleration values to 0-1 range
      this._acceleration.x = (event.acceleration.x + 1) / 2;
      this._acceleration.y = (event.acceleration.y + 1) / 2;
      this._acceleration.z = (event.acceleration.z + 1) / 2;
    }

    if (event.accelerationIncludingGravity) {
      // Normalize acceleration values to 0-1 range
      this._gravity.x = (event.accelerationIncludingGravity.x + this.GRAVITY) / (2 * this.GRAVITY);
      this._gravity.y = (event.accelerationIncludingGravity.y + this.GRAVITY) / (2 * this.GRAVITY);
      this._gravity.z = (event.accelerationIncludingGravity.z + this.GRAVITY) / (2 * this.GRAVITY);
    }

    if (event.rotationRate) {
      // Normalize rotation values to 0-1 range
      this._rotation.alpha = (event.rotationRate.alpha + 180) / 360;
      this._rotation.beta = (event.rotationRate.beta + 180) / 360;
      this._rotation.gamma = (event.rotationRate.gamma + 180) / 360;
    }
  }

  handleDeviceOrientation(event) {
    this._orientation.alpha = event.alpha / 360; //a(0~360)
    this._orientation.beta = (event.beta + 180) / 360; //b(-180~180)
    this._orientation.gamma = (event.gamma + 90) / 180; //g(-90~90)
  }

  handleAbsoluteDeviceOrientation(event) {
    this._absoluteOrientation.alpha = event.alpha / 360; //a(0~360)
    this._absoluteOrientation.beta = (event.beta + 180) / 360; //b(-180~180)
    this._absoluteOrientation.gamma = (event.gamma + 90) / 180; //g(-90~90)
  }

  // Getter methods for current values
  getAcceleration() {
    return this._acceleration;
  }
  getGravity() {
    return this._gravity;
  }
  getRotation() {
    return this._rotation;
  }
  getOrientation() {
    return this._orientation;
  }
  getAbsoluteOrientation() {
    return this._absoluteOrientation;
  }
}

// Create singleton instance
const deviceMotion = new DeviceMotionHandler();

// Export a function to request permission
async function enableMotion() {
  return deviceMotion.requestPermissions();
}

// Create signals for acceleration
const accelerationX = signal(() => deviceMotion.getAcceleration().x);
const accelerationY = signal(() => deviceMotion.getAcceleration().y);
const accelerationZ = signal(() => deviceMotion.getAcceleration().z);

// Aliases for shorter names
const accX = accelerationX;
const accY = accelerationY;
const accZ = accelerationZ;

// Create signals for gravity
const gravityX = signal(() => deviceMotion.getGravity().x);
const gravityY = signal(() => deviceMotion.getGravity().y);
const gravityZ = signal(() => deviceMotion.getGravity().z);

// Aliases for shorter names
const gravX = gravityX;
const gravY = gravityY;
const gravZ = gravityZ;

// Create signals for orientation
const orientationAlpha = signal(() => deviceMotion.getOrientation().alpha);
const orientationBeta = signal(() => deviceMotion.getOrientation().beta);
const orientationGamma = signal(() => deviceMotion.getOrientation().gamma);
// Aliases for shorter names
const orientationA = orientationAlpha;
const orientationB = orientationBeta;
const orientationG = orientationGamma;

// Aliases mapping to X,Y,Z coordinates
const orientationX = orientationBeta;
const orientationY = orientationGamma;
const orientationZ = orientationAlpha;

// Short aliases for A,B,G,X,Y,Z

const oriA = orientationAlpha;
const oriB = orientationBeta;
const oriG = orientationGamma;

const oriX = orientationX;
const oriY = orientationY;
const oriZ = orientationZ;

// Create signals for absolute orientation
const absoluteOrientationAlpha = signal(() => deviceMotion.getAbsoluteOrientation().alpha);
const absoluteOrientationBeta = signal(() => deviceMotion.getAbsoluteOrientation().beta);
const absoluteOrientationGamma = signal(() => deviceMotion.getAbsoluteOrientation().gamma);

// Aliases for shorter names
const absOriA = absoluteOrientationAlpha;
const absOriB = absoluteOrientationBeta;
const absOriG = absoluteOrientationGamma;

// Aliases mapping to X,Y,Z coordinates
const absoluteOrientationX = absoluteOrientationBeta;
const absoluteOrientationY = absoluteOrientationGamma;
const absoluteOrientationZ = absoluteOrientationAlpha;

// Short aliases for X,Y,Z
const absOriX = absoluteOrientationX;
const absOriY = absoluteOrientationY;
const absOriZ = absoluteOrientationZ;

// Create signals for rotation
const rotationAlpha = signal(() => deviceMotion.getRotation().alpha);
const rotationBeta = signal(() => deviceMotion.getRotation().beta);
const rotationGamma = signal(() => deviceMotion.getRotation().gamma);
const rotationX = rotationBeta;
const rotationY = rotationGamma;
const rotationZ = rotationAlpha;

// Aliases for shorter names
const rotA = rotationAlpha;
const rotB = rotationBeta;
const rotG = rotationGamma;
const rotX = rotationX;
const rotY = rotationY;
const rotZ = rotationZ;

// // Bipolar versions (ranging from -1 to 1 instead of 0 to 1)
// export const accX2 = accX.toBipolar();
// export const accY2 = accY.toBipolar();
// export const accZ2 = accZ.toBipolar();

// export const rotA2 = rotA.toBipolar();
// export const rotB2 = rotB.toBipolar();
// export const rotG2 = rotG.toBipolar();

export { absOriA, absOriB, absOriG, absOriX, absOriY, absOriZ, absoluteOrientationAlpha, absoluteOrientationBeta, absoluteOrientationGamma, absoluteOrientationX, absoluteOrientationY, absoluteOrientationZ, accX, accY, accZ, accelerationX, accelerationY, accelerationZ, enableMotion, gravX, gravY, gravZ, gravityX, gravityY, gravityZ, oriA, oriB, oriG, oriX, oriY, oriZ, orientationA, orientationAlpha, orientationB, orientationBeta, orientationG, orientationGamma, orientationX, orientationY, orientationZ, rotA, rotB, rotG, rotX, rotY, rotZ, rotationAlpha, rotationBeta, rotationGamma, rotationX, rotationY, rotationZ };
