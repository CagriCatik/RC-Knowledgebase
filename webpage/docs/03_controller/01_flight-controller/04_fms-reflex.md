# FMS Reflex V3

## Introduction

The **FMS Reflex V3 Flight Controller Gyro Stabilizer** represents the latest advancement in remote control (RC) aircraft stabilization technology. Designed to cater to both novice and seasoned RC enthusiasts, the Reflex V3 seamlessly integrates sophisticated gyro stabilization with an intuitive user interface. This ensures enhanced flight stability, precise control, and an overall improved flying experience. Whether you're aiming to minimize crashes during your initial flights or seeking to master advanced maneuvers, the Reflex V3 provides the necessary tools and flexibility to elevate your RC aircraft performance.

This documentation delves into the Reflex V3's features, installation procedures, compatibility across various aircraft models, customization capabilities, and troubleshooting strategies. By following this guide, users can fully leverage the Reflex V3's potential, ensuring safe and enjoyable flights.

---

## Key Features

### 1. **Three Flight Modes**

The Reflex V3 offers versatile flight modes tailored to different skill levels and flight requirements:

- **Stabilized Mode**
  - **Purpose**: Designed for beginners or those seeking added flight stability.
  - **Functionality**: Limits control surface angles and automatically levels the aircraft, mitigating the risk of crashes due to inadvertent control inputs.
  - **Benefits**:
    - Simplifies flight control for newcomers.
    - Provides a stable platform for learning basic flight maneuvers.

- **Optimized Mode**
  - **Purpose**: Suited for intermediate to advanced pilots aiming for enhanced stability in variable conditions.
  - **Functionality**: Employs advanced gyro algorithms to counteract in-flight disturbances such as gusts, turbulence, or crosswinds, ensuring smoother and more controlled flights.
  - **Benefits**:
    - Maintains aircraft stability in challenging environments.
    - Enhances maneuver precision during dynamic flight scenarios.

- **Manual Mode**
  - **Purpose**: Geared towards experienced pilots who prefer full control without stabilization assistance.
  - **Functionality**: Disables all gyro stabilization features, allowing pilots to manually manage all aspects of flight.
  - **Benefits**:
    - Enables the execution of complex and rapid maneuvers.
    - Provides a pure piloting experience without automated adjustments.

### 2. **Bluetooth Connectivity**

The Reflex V3 integrates Bluetooth technology, facilitating seamless communication between the flight controller and user devices:

- **FMS Reflex App Integration**
  - **Platforms Supported**: iOS, Android, and Windows.
  - **Capabilities**:
    - Real-time parameter adjustments during flight sessions.
    - Firmware updates and feature enhancements.
    - Access to flight logs and performance analytics.

- **Benefits**:
  - **User-Friendly Interface**: Intuitive app design simplifies the configuration process.
  - **Immediate Feedback**: Allows pilots to make on-the-fly adjustments based on flight performance.
  - **Remote Configuration**: Eliminates the need for physical connections, offering greater flexibility during setup.

### 3. **Customizable Parameter Adjustment**

Flexibility is at the core of the Reflex V3, enabling users to tailor the flight controller to their specific needs:

- **Gyro Sensitivity**: Adjust the responsiveness of the gyro stabilization to match the aircraft's dynamics and pilot preferences.
- **Control Surface Angles**: Fine-tune the maximum deflection angles for ailerons, elevators, and rudders to optimize maneuverability and stability.
- **Servo Travel**: Customize servo movements to ensure precise control over flight surfaces, enhancing overall aircraft performance.

- **Benefits**:
  - **Personalization**: Adapts to a wide range of aircraft sizes and configurations.
  - **Performance Optimization**: Ensures that stabilization settings complement the aircraft's inherent characteristics.

### 4. **Expanded Compatibility**

While the Reflex V3 is pre-configured for FMS models, its design ensures broad compatibility across various RC aircraft brands:

- **"Other_Plane" Configuration**:
  - **Functionality**: Allows users to manually configure the Reflex V3 for non-FMS aircraft models.
  - **Customization**: Users can define specific parameters to align with their aircraft's control systems and flight dynamics.

- **Supported Brands**:
  - Compatible with major RC aircraft manufacturers, ensuring versatility for diverse user bases.

- **Benefits**:
  - **Versatility**: Supports a wide array of aircraft, from hobbyist models to professional-grade planes.
  - **Ease of Integration**: Simplifies the setup process for non-FMS aircraft through customizable settings.

### 5. **Unique Identification Code**

Security and reliability are paramount in multi-system environments:

- **Unique Code Assignment**:
  - Each Reflex V3 unit is assigned a distinct identification code during manufacturing.
  
- **Pairing Security**:
  - Ensures that each Reflex V3 only communicates with its designated user device, preventing unauthorized access or interference.

- **Benefits**:
  - **Interference Prevention**: Eliminates signal cross-talk in environments where multiple Reflex V3 units are in operation.
  - **Enhanced Security**: Protects user configurations and flight data from unintended access.

---

## Setup and Installation

Proper installation of the Reflex V3 is crucial to ensure optimal performance and flight safety. Follow the steps below to set up your flight controller:

### 1. **Hardware Connections**

- **Throttle and Flight Surface Channels**:
  - **Connection Process**:
    1. Identify the throttle and control surface channels (aileron, elevator, rudder) on your RC transmitter.
    2. Connect each channel to the corresponding input ports on the Reflex V3 flight controller using appropriate servo cables.
    3. Ensure secure connections to prevent signal loss during flight.

- **Gyro Mode Control**:
  - **3-Wire Cable Connection**:
    1. Locate the channel on your transmitter designated for gyro mode control, typically managed by a 3-position switch.
    2. Use a 3-wire cable to connect this channel to the SBUS/PPM port on the Reflex V3.
    3. Verify that the connection is firm to allow reliable switching between flight modes.

- **Power Supply**:
  - **Ensure**: The Reflex V3 is connected to a stable power source compatible with your aircraft's electrical system to prevent power-related issues during flight.

### 2. **Bluetooth Pairing**

Establishing a Bluetooth connection between the Reflex V3 and the FMS Reflex app is essential for configuration and parameter adjustments:

- **App Installation**:
  - **Download Options**:
    - **iOS**: Available on the App Store.
    - **Android**: Available on Google Play.
    - **Windows**: Available through the official FMS website or app stores.
    - **Alternative Access**: Scan the QR code provided in the Reflex V3 manual to access the download link directly.

- **Pairing Procedure**:
  1. **Power On**: Turn on the Reflex V3 flight controller.
  2. **Open App**: Launch the FMS Reflex app on your device.
  3. **Search for Device**: Navigate to the Bluetooth settings within the app and initiate a device search.
  4. **Select Device**: Choose your Reflex V3 unit from the list of available devices.
  5. **Authenticate**: Enter the default password "123456" when prompted to establish a secure connection.
  6. **Confirmation**: Upon successful pairing, the app will indicate a connected status, allowing access to configuration settings.

### 3. **Model Selection**

Configuring the Reflex V3 to align with your specific aircraft model ensures optimal performance:

- **Selecting the Aircraft Model**:
  1. **Within the App**: Access the model selection interface.
  2. **Pre-Configured Models**: Choose from the list of supported FMS models (e.g., 1700mm F4U V2, 1100mm MXS V2, 1400mm J3 Cub V4).
  3. **Non-FMS Models**: Select the "Other_Plane" option for aircraft not listed among the pre-configured models.

- **Parameter Adjustment**:
  - **Gyro Direction**: Define the operational orientation of the gyro to match the aircraft's control surfaces.
  - **Sensitivity**: Adjust gyro responsiveness to suit flight dynamics.
  - **Control Surface Angles**: Set appropriate deflection limits to prevent overcorrection or excessive movement.

- **Saving Configuration**:
  - Ensure all adjustments are saved within the app to apply settings during flight operations.

---

## Customization and Parameter Adjustment

The Reflex V3 offers extensive customization options, allowing users to fine-tune various parameters to match their flight preferences and aircraft specifications.

### 1. **Gyro Settings**

- **Reversing Controls**:
  - **Purpose**: Aligns the gyro's corrective actions with the aircraft's control inputs.
  - **Procedure**:
    1. Access the gyro settings within the FMS Reflex app.
    2. Toggle the reverse controls option for each control surface (ailerons, elevators, rudders) as needed.
    3. Test the responses during bench testing to ensure correct orientation.

- **Sensitivity Adjustment**:
  - **Purpose**: Controls the aggressiveness of the gyro's stabilization efforts.
  - **Parameters**:
    - **Roll Sensitivity**: Determines responsiveness to side-to-side tilts.
    - **Pitch Sensitivity**: Controls forward and backward tilt adjustments.
    - **Yaw Sensitivity**: Manages left and right rotational stability.
  - **Procedure**:
    1. Navigate to the gyro sensitivity settings in the app.
    2. Adjust the gain values incrementally, observing the aircraft's response.
    3. Fine-tune until the desired level of stabilization is achieved without causing oscillations.

### 2. **Control Surface Angle Limits**

- **Purpose**: Prevents excessive deflection of control surfaces, which can lead to instability or oscillatory behavior.
- **Parameters**:
  - **Maximum Bank Angle**: Limits the roll angle to maintain lateral stability.
  - **Maximum Pitch Angle**: Restricts the pitch to ensure controlled ascent and descent.
  
- **Procedure**:
  1. Access the control surface angle settings within the app.
  2. Set the maximum permissible angles based on the aircraft's design and flight characteristics.
  3. Save the settings and perform bench testing to verify appropriate limits.

### 3. **Active Bar Adjustment**

- **Purpose**: Modifies servo travel to provide finer control over flight surfaces, enhancing maneuver precision.
- **Parameters**:
  - **Servo Travel Range**: Adjusts the extent of servo movement in Optimized and Manual Modes.
  
- **Procedure**:
  1. Locate the active bar adjustment settings in the app.
  2. Decrease the servo travel value to reduce movement range, resulting in more precise control.
  3. Incrementally adjust and test to achieve the desired level of control fidelity.

---

## Compatibility and Applications

Understanding the Reflex V3's compatibility ensures that it can be effectively integrated into a variety of RC aircraft setups.

### 1. **Supported Aircraft**

- **FMS Models**:
  - **1700mm F4U V2**: A high-performance model known for its agility and speed.
  - **1100mm MXS V2**: A versatile trainer suitable for both beginners and intermediate pilots.
  - **1400mm J3 Cub V4**: A classic design favored for its stability and ease of handling.

- **Non-FMS Models**:
  - **"Other_Plane" Configuration**: Allows users to adapt the Reflex V3 for aircraft outside the FMS lineup by customizing settings to match specific flight dynamics and control systems.

### 2. **Use Cases**

- **Beginner Pilots**:
  - **Stabilized Mode**: Acts as a training aid, reducing the complexity of flight control and minimizing the likelihood of crashes.
  - **Benefits**:
    - Builds confidence through stable flight behavior.
    - Facilitates learning basic maneuvers without overwhelming control inputs.

- **Experienced Pilots**:
  - **Optimized Mode**: Enhances flight stability in diverse environmental conditions, such as windy or turbulent conditions.
  - **Manual Mode**: Grants complete control for executing advanced maneuvers, stunts, and high-precision flying.
  - **Benefits**:
    - Provides adaptability to different flight scenarios.
    - Allows for seamless transition between assisted and manual control based on flight needs.

---

## Troubleshooting and Tips

Ensuring smooth operation of the Reflex V3 involves addressing common issues and adhering to best practices.

### 1. **Common Issues**

- **Incorrect Gyro Response**:
  - **Symptoms**: Unintended aircraft movements, inconsistent stabilization.
  - **Solutions**:
    1. Verify that gyro direction settings for each control surface are correctly configured in the app.
    2. Recalibrate the gyro through the app to ensure accurate orientation.
    3. Perform bench testing to confirm proper responses before flight.

- **Oscillations in Stabilized Mode**:
  - **Symptoms**: Repetitive overcorrections leading to unstable flight behavior.
  - **Solutions**:
    1. Reduce the control surface angle limits to minimize the range of motion.
    2. Decrease gyro sensitivity to prevent excessive corrective actions.
    3. Ensure that all control surfaces are properly balanced and free from mechanical obstructions.

### 2. **Best Practices**

- **Bench Testing**:
  - **Purpose**: Validate gyro responses and control surface movements before actual flight.
  - **Procedure**:
    1. Power on the Reflex V3 with the aircraft secured in a safe environment.
    2. Use the FMS Reflex app to simulate control inputs and observe servo responses.
    3. Adjust settings as necessary to achieve desired behavior.

- **Configuration for Non-FMS Models**:
  - **Procedure**:
    1. Select the "Other_Plane" option in the app.
    2. Carefully adjust parameters to match the specific characteristics of your aircraft.
    3. Conduct thorough testing to ensure stability and responsiveness.

- **Regular Firmware Updates**:
  - **Purpose**: Incorporate the latest features, enhancements, and bug fixes.
  - **Procedure**:
    1. Periodically check the FMS website or app for available updates.
    2. Follow the provided instructions to update the Reflex V3 firmware via Bluetooth.

- **Secure Connections**:
  - **Ensure**: All hardware connections are secure and free from damage to prevent signal loss or erratic behavior during flight.

---

## Conclusion

The **FMS Reflex V3 Flight Controller Gyro Stabilizer** stands as a testament to advanced RC flight technology, offering a harmonious blend of sophistication and user-centric design. Its comprehensive feature set—from versatile flight modes and Bluetooth connectivity to extensive customization options—ensures that it meets the diverse needs of RC aircraft enthusiasts across all skill levels. Whether you're embarking on your first flight or seeking to refine your piloting prowess, the Reflex V3 provides the stability, control, and flexibility necessary for a superior flying experience.
