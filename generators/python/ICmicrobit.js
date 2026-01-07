'use strict';

goog.provide('Blockly.Python.MicrobiteIcreateP');
goog.require('Blockly.Python');

//绿旗
Blockly.Python['event_whenflagclicked'] = function(block) {
    return '';
}


//#############################################外设###########################################
//远距离光电
Blockly.Python['MicrobiteIcreateP_ICM_LongRangePhotoelectric'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_digital()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//电位器
Blockly.Python['MicrobiteIcreateP_ICM_Potentiometer'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//灰度传感器
Blockly.Python['MicrobiteIcreateP_ICM_GrayLevel'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//光敏传感器
Blockly.Python['MicrobiteIcreateP_ICM_LightIntensity'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//火焰传感器
Blockly.Python['MicrobiteIcreateP_ICM_Flame'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//水位传感器
Blockly.Python['MicrobiteIcreateP_ICM_WaterLevel'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//可燃气体传感器
Blockly.Python['MicrobiteIcreateP_ICM_GasConcentration'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition' ) {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//土壤湿度传感器
Blockly.Python['MicrobiteIcreateP_ICM_SoilHumidity'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//防水温度传感器
Blockly.Python['MicrobiteIcreateP_ICM_WaterTemp'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_analog()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//霍尔传感器
Blockly.Python['MicrobiteIcreateP_ICM_hState'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_digital()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//按钮传感器
Blockly.Python['MicrobiteIcreateP_ICM_Button'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `pin${pinChoice}.read_digital()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//超声波传感器
Blockly.Python['MicrobiteIcreateP_ICM_UltrasonicWave'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE1').substring(1);

    const pythonCode = `ICM_ult${DICT_UltrasonicWavePin[pinChoice]}.get()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//检测到摇杆动作
Blockly.Python['MicrobiteIcreateP_ICM_RockerType'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `ICM_joy.${pinChoice}()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};

//摇杆
Blockly.Python['MicrobiteIcreateP_ICM_Rocker'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE').substring(1);

    const pythonCode = `ICM_joy.get_${pinChoice}()`;
    
    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked'  || parent.type=='event_when' || parent.type=='procedures_definition') {
      Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return '';
};


//舵机
Blockly.Python['MicrobiteIcreateP_ICM_server'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_ser${pinChoice}.write_angle(${pinText})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      //Blockly.Python.definitions_['import_servos'] = 'import servos';
      return pythonCode;
    }
    return "";
};

//电机
Blockly.Python['MicrobiteIcreateP_ICM_DCmotor'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const pinText = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_dcm${pinChoice}.run(${pinText})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//风扇 1开
Blockly.Python['MicrobiteIcreateP_ICM_Fan'] = function(block) {
    const pinChoice1 = block.getFieldValue('CHOICE1');
    const pinChoice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${pinChoice1.substring(1)}.write_angle(${DICT_LaserOff[pinChoice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
      //Blockly.Python.definitions_['import_servos'] = 'import servos';
      return pythonCode;
    }
    return "";
};
//电磁铁 1开
Blockly.Python['MicrobiteIcreateP_ICM_Elecmagnet'] = function(block) {
    const pinChoice1 = block.getFieldValue('CHOICE1');
    const pinChoice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${pinChoice1.substring(1)}.write_angle(${DICT_LaserOff[pinChoice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//读取位置
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_readPos'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.get_absolute_position()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//设置双电机地址
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_setDoubleMotor'] = function(block) {
    const pinChoice1 = block.getFieldValue('CHOICE1');
    const pinChoice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `ICM_smp = servo_motor.motor_pair(addr1=servo_motor.${DICT_MotorPin[pinChoice1]}, addr2=servo_motor.${DICT_MotorPin[pinChoice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//双电机转秒
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_DoubleRunSecond'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_smp.move_for_time(${Text1}, ${Text2},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//双电机转度
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_DoubleRunDegree'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_smp.move_to_relative_position(${Text1}, ${Text2},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//双电机转
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_DoubleRun'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_smp.move(${Text1}, ${Text2})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转度
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_RunDegree'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run_to_relative_position(${Text1},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转秒
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_RunSecond'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run_for_time(${Text1},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转到指定位置
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_RunPos'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run_to_absolute_position(${Text1},${Text3})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//单电机转
Blockly.Python['MicrobiteIcreateP_ICM_ICmotor_Run'] = function(block) {
    const pinChoice = block.getFieldValue('CHOICE');
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_sm_${DICT_MotorPin[pinChoice]}.run(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};


//LED
Blockly.Python['MicrobiteIcreateP_ICM_yellowLED'] = function(block) {
    const Choice1 = block.getFieldValue('CHOICE1');
    const Choice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${Choice1.substring(1)}.write_digital(${DICT_LEDOff[Choice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//设置灯环亮度
Blockly.Python['MicrobiteIcreateP_ICM_setLRLight'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `ICM_light${DICT_LightRingPin[Choice]}.light(${Text2})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//红：绿：蓝
Blockly.Python['MicrobiteIcreateP_ICM_createColor'] = function(block) {
    const Text1 = Blockly.Python.valueToCode(block, 'TEXT1',Blockly.Python.ORDER_NONE);
    const Text2 = Blockly.Python.valueToCode(block, 'TEXT2',Blockly.Python.ORDER_NONE);
    const Text3 = Blockly.Python.valueToCode(block, 'TEXT3',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `(${Text1},${Text2},${Text3})`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return [pythonCode, Blockly.Python.ORDER_NONE];;
    }
    return "";
};

Blockly.Python['LRColorD'] = function(block) {
    console.log(1111)
    return [222, Blockly.Python.ORDER_ATOMIC];
};

//灯环显示颜色
Blockly.Python['MicrobiteIcreateP_ICM_LRColor'] = function(block) {
    const Choice1 = block.getFieldValue('CHOICE1');
    let Choice2 = block.getFieldValue('LRColorD');
    
    // 处理颜色元组或映射
    const isColorTuple = /^$\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*$$/.test(Choice2);
    console.log(isColorTuple)
    if (!isColorTuple && DICT_LightRingColor[Choice2]) {
      Choice2 = DICT_LightRingColor[Choice2];
    }
    console.log(Choice2)
    console.log('Final Choice2:', Choice2);

    const pythonCode = `ICM_light${DICT_LightRingPin[Choice1]}.color(${Choice2})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//初始化OLED
Blockly.Python['MicrobiteIcreateP_ICM_OLEDini'] = function(block) {
    const pythonCode = `oled_display = oled.oled()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//显示文本在
Blockly.Python['MicrobiteIcreateP_ICM_OLEDshow'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE);
    const text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    const color = block.getFieldValue('COLOR');
    
    const pythonCode = `oled_display.set_text(${x}, ${y}, ${text}, ${DICT_OLEDColor[color]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//清除OLED
Blockly.Python['MicrobiteIcreateP_ICM_OLEDclear'] = function(block) {
    const pythonCode = `oled_display.clear_screen()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//激光模块
Blockly.Python['MicrobiteIcreateP_ICM_Laser'] = function(block) {
    const Choice1 = block.getFieldValue('CHOICE1');
    const Choice2 = block.getFieldValue('CHOICE2');
    
    const pythonCode = `pin${Choice1.substring(1)}.write_digital(${DICT_LaserOff[Choice2]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//录音模块
Blockly.Python['MicrobiteIcreateP_ICM_Recording'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    
    const pythonCode = `ICMBP_rec.voice(recording.${DICT_Recording[Choice]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};

//########################################################################################


//外设字典
// let DICT_LEDOff = {'打开':"0",'关闭':"1"}
// let DICT_LaserOff = {'打开':"1",'关闭':"0"}
// let DICT_LightRingPin = {'P0':'P13P0', 
// 'P1':'P14P1',
// 'P2':'P15P2',
// 'P8':'P7P8',
// 'P12':'P9P12',
// 'P16':'P10P16'}
// let DICT_LightRingColor=  {'红色':'(255, 0, 0)', 
// '橙色':'(255, 165, 0)',
// '黄色':'(255, 255, 0)',
// '绿色':'(0, 255, 0)',
// '青色':'(0, 255, 255)',
// '蓝色':'(0, 0, 255)',
// '紫色':'(128, 0, 128)',
// '白色':'(255, 255, 255)',
// '黑色':'(0, 0, 0)'
// }
// let DICT_Recording = {'机枪扫射':'GUNSHOT', 
// '激光发射':'LASER', 
// '赛车加速':'MOTORCYCLE', 
// '战争开始':'WARBEGIN', 
// '倒计时':'COUNTDOWN', 
// '录音':'PLAYRECORDING', 
// }
// let DICT_RockerType = {'上':'is_up', 
// '下':'is_down', 
// '左':'is_left', 
// '右':'is_right'
// }
// let DICT_MotorPin = {'红':'LIGHT_RED', 
// '绿':'LIGHT_GREEN', 
// '蓝':'LIGHT_BLUE', 
// '黄':'LIGHT_YELLOW'
// }
// let DICT_UltrasonicWavePin = {'(P13,P0)':'0', 
// '(P14,P1)':'1', 
// '(P9,P12)':'4', 
// '(P15,P2)':'2'
// }
// let DICT_OLEDColor={'白底黑字':'0','黑底白字':'1'}

// let DICT_LEDOff = {'打开':"0",'关闭':"1", 'On':"0", 'Off':"1"}
// let DICT_LaserOff = {'打开':"1",'关闭':"0", 'On':"1", 'Off':"0"}
// let DICT_LightRingPin = {'P0':'P13P0','P1':'P14P1','P2':'P15P2','P8':'P7P8','P12':'P9P12','P16':'P10P16'} // 无需修改
// let DICT_LightRingColor=  {
//     '红色':'(255, 0, 0)', 'Red':'(255, 0, 0)',
//     '橙色':'(255, 165, 0)', 'Orange':'(255, 165, 0)',
//     '黄色':'(255, 255, 0)', 'Yellow':'(255, 255, 0)',
//     '绿色':'(0, 255, 0)', 'Green':'(0, 255, 0)',
//     '青色':'(0, 255, 255)', 'Cyan':'(0, 255, 255)',
//     '蓝色':'(0, 0, 255)', 'Blue':'(0, 0, 255)',
//     '紫色':'(128, 0, 128)', 'Purple':'(128, 0, 128)',
//     '白色':'(255, 255, 255)', 'White':'(255, 255, 255)',
//     '黑色':'(0, 0, 0)', 'Black':'(0, 0, 0)'
// }
// let DICT_Recording = {
//     '机枪扫射':'GUNSHOT', 'Machine Gun Fire':'GUNSHOT',
//     '激光发射':'LASER', 'Laser Shoot':'LASER',
//     '赛车加速':'MOTORCYCLE', 'Racing Car Acceleration':'MOTORCYCLE',
//     '战争开始':'WARBEGIN', 'War Begins':'WARBEGIN',
//     '倒计时':'COUNTDOWN', 'Countdown':'COUNTDOWN',
//     '录音':'PLAYRECORDING', 'Recording':'PLAYRECORDING'
// }
// let DICT_RockerType = {
//     '上':'is_up', 'Up':'is_up',
//     '下':'is_down', 'Down':'is_down',
//     '左':'is_left', 'Left':'is_left',
//     '右':'is_right', 'Right':'is_right'
// }
// let DICT_MotorPin = {
//     '红':'LIGHT_RED', 'Red':'LIGHT_RED',
//     '绿':'LIGHT_GREEN', 'Green':'LIGHT_GREEN',
//     '蓝':'LIGHT_BLUE', 'Blue':'LIGHT_BLUE',
//     '黄':'LIGHT_YELLOW', 'Yellow':'LIGHT_YELLOW'
// }
// let DICT_UltrasonicWavePin = {'(P13,P0)':'0','(P14,P1)':'1','(P9,P12)':'4','(P15,P2)':'2'} // 无需修改
// let DICT_OLEDColor = {
//     '白底黑字':'0', 'White Background with Black Text':'0',
//     '黑底白字':'1', 'Black Background with White Text':'1'
// }


let DICT_LEDOff = {
    '打开': "0", '关闭': "1",
    'On': "0", 'Off': "1",
    'Włączone': "0", 'Wyłączone': "1",   // 波兰语
    'включить': "0", 'выключить': "1"   // 俄语（来自语言包）
}

let DICT_LaserOff = {
    '打开': "1", '关闭': "0",
    'On': "1", 'Off': "0",
    'Włączone': "1", 'Wyłączone': "0",   // 波兰语
    'включить': "1", 'выключить': "0"   // 俄语（来自语言包）
}

let DICT_LightRingPin = {
    'P0': 'P13P0', 'P1': 'P14P1', 'P2': 'P15P2',
    'P8': 'P7P8', 'P12': 'P9P12', 'P16': 'P10P16'
}

let DICT_LightRingColor = {
    '红色': '(255, 0, 0)', 'Red': '(255, 0, 0)', 'Czerwony': '(255, 0, 0)', 'красный': '(255, 0, 0)',
    '橙色': '(255, 165, 0)', 'Orange': '(255, 165, 0)', 'Pomarańczowy': '(255, 165, 0)', 'оранжевый': '(255, 165, 0)',
    '黄色': '(255, 255, 0)', 'Yellow': '(255, 255, 0)', 'Żółty': '(255, 255, 0)', 'жёлтый': '(255, 255, 0)',
    '绿色': '(0, 255, 0)', 'Green': '(0, 255, 0)', 'Zielony': '(0, 255, 0)', 'зелёный': '(0, 255, 0)',
    '青色': '(0, 255, 255)', 'Cyan': '(0, 255, 255)', 'Turkusowy': '(0, 255, 255)', 'бирюзовый': '(0, 255, 255)',
    '蓝色': '(0, 0, 255)', 'Blue': '(0, 0, 255)', 'Niebieski': '(0, 0, 255)', 'синий': '(0, 0, 255)',
    '紫色': '(128, 0, 128)', 'Purple': '(128, 0, 128)', 'Fioletowy': '(128, 0, 128)', 'фиолетовый': '(128, 0, 128)',
    '白色': '(255, 255, 255)', 'White': '(255, 255, 255)', 'Biały': '(255, 255, 255)', 'белый': '(255, 255, 255)',
    '黑色': '(0, 0, 0)', 'Black': '(0, 0, 0)', 'Czarny': '(0, 0, 0)', 'чёрный': '(0, 0, 0)'
}

let DICT_Recording = {
    '机枪扫射': 'GUNSHOT', 'Machine Gun Fire': 'GUNSHOT', 'Strzały z karabinu maszynowego': 'GUNSHOT', 'очередь из пулемёта': 'GUNSHOT',
    '激光发射': 'LASER', 'Laser Shoot': 'LASER', 'Strzał laserem': 'LASER', 'выстрел лазера': 'LASER',
    '赛车加速': 'MOTORCYCLE', 'Racing Car Acceleration': 'MOTORCYCLE', 'Przyspieszenie Samochodu Wyścigowego': 'MOTORCYCLE', 'ускорение мотоцикла': 'MOTORCYCLE',
    '战争开始': 'WARBEGIN', 'War Begins': 'WARBEGIN', 'Wyczyść początki': 'WARBEGIN', 'начало войны': 'WARBEGIN',
    '倒计时': 'COUNTDOWN', 'Countdown': 'COUNTDOWN', 'Odliczanie': 'COUNTDOWN', 'обратный отсчёт': 'COUNTDOWN',
    '录音': 'PLAYRECORDING', 'Recording': 'PLAYRECORDING', 'Nagrywanie': 'PLAYRECORDING', 'запись': 'PLAYRECORDING'
}

let DICT_RockerType = {
    '上': 'is_up', 'Up': 'is_up', 'W górę': 'is_up', 'вверх': 'is_up',
    '下': 'is_down', 'Down': 'is_down', 'W dół': 'is_down', 'вниз': 'is_down',
    '左': 'is_left', 'Left': 'is_left', 'W lewo': 'is_left', 'влево': 'is_left',
    '右': 'is_right', 'Right': 'is_right', 'W prawo': 'is_right', 'вправо': 'is_right'
}

let DICT_MotorPin = {
    '红': 'LIGHT_RED', 'Red': 'LIGHT_RED', 'Czerwony': 'LIGHT_RED', 'красный': 'LIGHT_RED',
    '绿': 'LIGHT_GREEN', 'Green': 'LIGHT_GREEN', 'Zielony': 'LIGHT_GREEN', 'зелёный': 'LIGHT_GREEN',
    '蓝': 'LIGHT_BLUE', 'Blue': 'LIGHT_BLUE', 'Niebieski': 'LIGHT_BLUE', 'синий': 'LIGHT_BLUE',
    '黄': 'LIGHT_YELLOW', 'Yellow': 'LIGHT_YELLOW', 'Żółty': 'LIGHT_YELLOW', 'жёлтый': 'LIGHT_YELLOW'
}
let DICT_UltrasonicWavePin = {
    '(P13,P0)': '0', '(P14,P1)': '1', '(P9,P12)': '4', '(P15,P2)': '2'
}
let DICT_OLEDColor = {
    '白底黑字': '0',
    'White Background with Black Text': '0',
    'Białe tło z czarnym tekstem': '0',
    'белый фон, чёрный текст': '0',

    '黑底白字': '1',
    'Black Background with White Text': '1',
    'Czarne tło z białym tekstem': '1',
    'чёрный фон, белый текст': '1'
}







//#############################################主板###########################################
//显示图像
Blockly.Python['MicrobitIcreate_ICM_showImage'] = function(block) {
    const img = block.getFieldValue('IMAGE');
    
    const pythonCode = `display.show(Image.${DICT_displayImage[img]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//显示自定义图像
Blockly.Python['MicrobitIcreate_ICM_showSelfImage'] = function(block) {
    //let matrix = block.getFieldValue('MATRIX').replace(/1/g, '9');// 1替换成9
    let matrix = Blockly.Python.valueToCode(block, 'MATRIX',Blockly.Python.ORDER_NONE).replace(/1/g, '9');
    let result = matrix.match(/.{1,5}/g).join(':');//每5个字符分割一次
    
    const pythonCode = `display.show(Image("${result}"))\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//显示字符串
Blockly.Python['MicrobitIcreate_ICM_showString'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `display.show(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//滚动显示字符串
Blockly.Python['MicrobitIcreate_ICM_scrollShowString'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `display.scroll(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//设置像素
Blockly.Python['MicrobitIcreate_ICM_setPixel'] = function(block) {
    const x = Blockly.Python.valueToCode(block, 'X',Blockly.Python.ORDER_NONE);
    const y = Blockly.Python.valueToCode(block, 'Y',Blockly.Python.ORDER_NONE)
    const l = Blockly.Python.valueToCode(block, 'L',Blockly.Python.ORDER_NONE)
    
    const pythonCode = `display.set_pixel(${x},${y},${l})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//清除显示
Blockly.Python['MicrobitIcreate_ICM_showClear'] = function(block) {
    const pythonCode = `display.clear()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};


//按钮
Blockly.Python['MicrobitIcreate_ICM_buttonPressed'] = function(block) {
    let code='';
    if(block.getFieldValue('CHOICE') == 'A'){
        code = "button_a"
    }else if(block.getFieldValue('CHOICE') == 'B'){
        code = "button_b"
    }
    
    const pythonCode = `${code}.is_pressed()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//亮度
Blockly.Python['MicrobitIcreate_ICM_light'] = function(block) {
    const pythonCode = `display.read_light_level()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//温度
Blockly.Python['MicrobitIcreate_ICM_temperature'] = function(block) {
    const pythonCode = `temperature()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//声音
Blockly.Python['MicrobitIcreate_ICM_soundLevel'] = function(block) {
    const pythonCode = `microphone.sound_level()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//指南针校准
Blockly.Python['MicrobitIcreate_ICM_compassCalibrate'] = function(block) {
    const pythonCode = `compass.calibrate()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return pythonCode;
    }
    return "";
};
//指南针朝向
Blockly.Python['MicrobitIcreate_ICM_compassHeading'] = function(block) {
    const pythonCode = `compass.heading()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//磁力
Blockly.Python['MicrobitIcreate_ICM_magnetStrength'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    const pythonCode = `compass.${DICT_magnetStrengthPlay[Choice]}()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//手势
Blockly.Python['MicrobitIcreate_ICM_accelerometerGesture'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    const pythonCode = `accelerometer.was_gesture("${DICT_gesturePlay[Choice]}")`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};
//加速度
Blockly.Python['MicrobitIcreate_ICM_accelerometer'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    let code='';
    if(Choice == 'X'){
        code = "get_x"
    }else if(Choice == 'Y'){
        code = "get_y"
    }else if(Choice == 'Z'){
        code = "get_z"
    }
    const pythonCode = `accelerometer.${code}()`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
        return [pythonCode, Blockly.Python.ORDER_NONE];
    }
    return "";
};


//播放音乐
Blockly.Python['MicrobitIcreate_ICM_musicPlay'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    
    const pythonCode = `music.play(music.${DICT_musicPlay[Choice]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//设置播放速度
Blockly.Python['MicrobitIcreate_ICM_setTempo'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `music.set_tempo(bpm=${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//音调 频率持续播放
Blockly.Python['MicrobitIcreate_ICM_musicPitch'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `music.pitch(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//语音 说
Blockly.Python['MicrobitIcreate_ICM_speechSay'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `speech.say(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//停止持续播放
Blockly.Python['MicrobitIcreate_ICM_musicStop'] = function(block) {
    const pythonCode = `music.stop()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//播放富有表现力的声音
Blockly.Python['MicrobitIcreate_ICM_audioPlay'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    
    const pythonCode = `audio.play(Sound.${DICT_audioPlay[Choice]})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//音量
Blockly.Python['MicrobitIcreate_ICM_setVolume'] = function(block) {
    const Text = Blockly.Python.valueToCode(block, 'TEXT',Blockly.Python.ORDER_NONE);
    
    const pythonCode = `set_volume(${Text})\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};
//关闭、启用扬声器
Blockly.Python['MicrobitIcreate_ICM_speakerOff'] = function(block) {
    const Choice = block.getFieldValue('CHOICE');
    
    const pythonCode = `speaker.${DICT_speakerPlay[Choice]}()\n`;

    let parent = block;
    while (parent.getParent()) {
      parent = parent.getParent();
    }
    if (parent.type === 'event_whenflagclicked' || parent.type=='event_when' || parent.type=='procedures_definition') {
      return pythonCode;
    }
    return "";
};








//########################################################################################


//主板字典
// let DICT_displayImage = {'心形':"HEART",
// '心形_小':"HEART_SMALL",
// '快乐':"HAPPY",
// '微笑':"SMILE",
// '悲伤':"SAD",
// '困惑':"CONFUSED",
// '生气':"ANGRY",
// '睡着':"ASLEEP",
// '惊讶':"SURPRISED",
// '傻傻的':"SILLY",
// '极好的':"FABULOUS",
// '是':"YES",
// '否':"NO",
// '不感兴趣的':"MEH",
// '鸭子':"DUCK",
// '长颈鹿':"GIRAFFE",
// '吃豆人':"PACMAN",
// '幽灵':"GHOST",
// '骷髅':"SKULL"
// }

// let DICT_musicPlay = {'鼓点叭叮':"BA_DING",
// '反面角色':"BADDY",
// '生日快乐':"BIRTHDAY",
// '布鲁斯':"BLUES",
// '追逐':"CHASE",
// '哒哒哒噔':"DADADADUM",
// '演艺人':"ENTERTAINER",
// '葬礼':"FUNERAL",
// '放克音乐':"FUNK",
// '向下跳':"JUMP_DOWN",
// '向上跳':"JUMP_UP",
// '彩虹猫':"NYAN",
// '欢乐颂':"ODE",
// '能力减弱':"POWER_DOWN",
// '能力增强':"POWER_UP",
// '前奏':"PRELUDE",
// '笑点':"PUNCHLINE",
// 'PYTHON':"PYTHON",
// '铃声':"RINGTONE",
// '哇哇哇哇':"WAWAWAWAA",
// '婚礼':"WEDDING"
// }

// let DICT_audioPlay = {'咯咯笑':"GIGGLE",
// '快乐':"HAPPY",
// '你好':"HELLO",
// '神秘的':"MYSTERIOUS",
// '难过':"SAD",
// '滑':"SLIDE",
// '飙升':"SOARING",
// '弹簧':"SPRING",
// '闪烁':"TWINKLE",
// '打哈欠':"YAWN"
// }

// let DICT_gesturePlay = {'摇晃':"shake",
// '标志朝上':"up",
// '标志朝下':"down",
// '正面朝上':"face up",
// '正面朝下':"face down",
// '左':"left",
// '右':"right",
// '自由落体':"freefall",
// '3g':"3g"
// }

// let DICT_magnetStrengthPlay = {'X':"get_x",
// 'Y':"get_y",
// 'Z':"get_z",
// '强度':"get_field_strength"
// }

// let DICT_speakerPlay = {'关闭':"off",
// '打开':"on"
// }

// let DICT_displayImage = {
//     '心形': "HEART",
//     'Heart': "HEART",
//     '心形_小': "HEART_SMALL",
//     'Small Heart': "HEART_SMALL",
//     '快乐': "HAPPY",
//     'Happy': "HAPPY",
//     '微笑': "SMILE",
//     'Smile': "SMILE",
//     '悲伤': "SAD",
//     'Sad': "SAD",
//     '困惑': "CONFUSED",
//     'Confused': "CONFUSED",
//     '生气': "ANGRY",
//     'Angry': "ANGRY",
//     '睡着': "ASLEEP",
//     'Asleep': "ASLEEP",
//     '惊讶': "SURPRISED",
//     'Surprised': "SURPRISED",
//     '傻傻的': "SILLY",
//     'Silly': "SILLY",
//     '极好的': "FABULOUS",
//     'Fabulous': "FABULOUS",
//     '是': "YES",
//     'Yes': "YES",
//     '否': "NO",
//     'No': "NO",
//     '不感兴趣的': "MEH",
//     'Indifferent': "MEH",
//     '鸭子': "DUCK",
//     'Duck': "DUCK",
//     '长颈鹿': "GIRAFFE",
//     'Giraffe': "GIRAFFE",
//     '吃豆人': "PACMAN",
//     'Pacman': "PACMAN",
//     '幽灵': "GHOST",
//     'Ghost': "GHOST",
//     '骷髅': "SKULL",
//     'Skull': "SKULL"
// }


// let DICT_musicPlay = {
//     '鼓点叭叮': "BA_DING",
//     'Drum Beat': "BA_DING",
//     '反面角色': "BADDY",
//     'Villain': "BADDY",
//     '生日快乐': "BIRTHDAY",
//     'Happy Birthday': "BIRTHDAY",
//     '布鲁斯': "BLUES",
//     'Blues': "BLUES",
//     '追逐': "CHASE",
//     'Chase': "CHASE",
//     '哒哒哒噔': "DADADADUM",
//     'Da Da Da Dum': "DADADADUM",
//     '演艺人': "ENTERTAINER",
//     'Entertainer': "ENTERTAINER",
//     '葬礼': "FUNERAL",
//     'Funeral': "FUNERAL",
//     '放克音乐': "FUNK",
//     'Funk': "FUNK",
//     '向下跳': "JUMP_DOWN",
//     'Jump Down': "JUMP_DOWN",
//     '向上跳': "JUMP_UP",
//     'Jump Up': "JUMP_UP",
//     '彩虹猫': "NYAN",
//     'Nyan Cat': "NYAN",
//     '欢乐颂': "ODE",
//     'Ode to Joy': "ODE",
//     '能力减弱': "POWER_DOWN",
//     'Power Down': "POWER_DOWN",
//     '能力增强': "POWER_UP",
//     'Power Up': "POWER_UP",
//     '前奏': "PRELUDE",
//     'Prelude': "PRELUDE",
//     '笑点': "PUNCHLINE",
//     'Punchline': "PUNCHLINE",
//     'PYTHON': "PYTHON",
//     'Python': "PYTHON",
//     '铃声': "RINGTONE",
//     'Ringtone': "RINGTONE",
//     '哇哇哇哇': "WAWAWAWAA",
//     'Wah Wah Sound': "WAWAWAWAA",
//     '婚礼': "WEDDING",
//     'Wedding': "WEDDING"
// }

// let DICT_audioPlay = {
//     '咯咯笑': "GIGGLE",
//     'Giggle': "GIGGLE",
//     '快乐': "HAPPY",
//     'Happy': "HAPPY",
//     '你好': "HELLO",
//     'Hello': "HELLO",
//     '神秘的': "MYSTERIOUS",
//     'Mysterious': "MYSTERIOUS",
//     '难过': "SAD",
//     'Sad': "SAD",
//     '滑': "SLIDE",
//     'Slide': "SLIDE",
//     '飙升': "SOARING",
//     'Soaring': "SOARING",
//     '弹簧': "SPRING",
//     'Spring': "SPRING",
//     '闪烁': "TWINKLE",
//     'Twinkle': "TWINKLE",
//     '打哈欠': "YAWN",
//     'Yawn': "YAWN"
// }

// let DICT_gesturePlay = {
//     '摇晃': "shake",
//     'Shake': "shake",
//     '标志朝上': "up",
//     'Logo Up': "up",
//     '标志朝下': "down",
//     'Logo Down': "down",
//     '正面朝上': "face up",
//     'Face Up': "face up",
//     '正面朝下': "face down",
//     'Face Down': "face down",
//     '左': "left",
//     'Left': "left",
//     '右': "right",
//     'Right': "right",
//     '自由落体': "freefall",
//     'Free Fall': "freefall",
//     '3g': "3g",
//     '3G': "3g"
// }

// let DICT_magnetStrengthPlay = {
//     'X': "get_x",
//     'Y': "get_y",
//     'Z': "get_z",
//     '强度': "get_field_strength",
//     'Intensity': "get_field_strength" // 添加英文键
// }

// let DICT_speakerPlay = {
//     '关闭': "off",
//     'Off': "off",
//     '打开': "on",
//     'On': "on"
// }

// let DICT_displayImage = {
//     '心形': "HEART",
//     'Heart': "HEART",
//     '心形_小': "HEART_SMALL",
//     'Small Heart': "HEART_SMALL",
//     '快乐': "HAPPY",
//     'Happy': "HAPPY",
//     '微笑': "SMILE",
//     'Smile': "SMILE",
//     '悲伤': "SAD",
//     'Sad': "SAD",
//     '困惑': "CONFUSED",
//     'Confused': "CONFUSED",
//     '生气': "ANGRY",
//     'Angry': "ANGRY",
//     '睡着': "ASLEEP",
//     'Asleep': "ASLEEP",
//     '惊讶': "SURPRISED",
//     'Surprised': "SURPRISED",
//     '傻傻的': "SILLY",
//     'Silly': "SILLY",
//     '极好的': "FABULOUS",
//     'Fabulous': "FABULOUS",
//     '是': "YES",
//     'Yes': "YES",
//     '否': "NO",
//     'No': "NO",
//     '不感兴趣的': "MEH",
//     'Indifferent': "MEH",
//     '鸭子': "DUCK",
//     'Duck': "DUCK",
//     '长颈鹿': "GIRAFFE",
//     'Giraffe': "GIRAFFE",
//     '吃豆人': "PACMAN",
//     'Pacman': "PACMAN",
//     '幽灵': "GHOST",
//     'Ghost': "GHOST",
//     '骷髅': "SKULL",
//     'Skull': "SKULL"
// }
let DICT_displayImage = {
  '心形': "HEART",
  'Heart': "HEART",
  'Serce': "HEART",
  'сердце': "HEART",

  '心形_小': "HEART_SMALL",
  'Small Heart': "HEART_SMALL",
  'Małe serce': "HEART_SMALL",
  'сердце (маленькое)': "HEART_SMALL",

  '快乐': "HAPPY",
  'Happy': "HAPPY",
  'Szczęśliwy': "HAPPY",
  'радость': "HAPPY",

  '微笑': "SMILE",
  'Smile': "SMILE",
  'Uśmiech': "SMILE",
  'улыбка': "SMILE",

  '悲伤': "SAD",
  'Sad': "SAD",
  'Smutny': "SAD",
  'грусть': "SAD",

  '困惑': "CONFUSED",
  'Confused': "CONFUSED",
  'Zdezorientowany': "CONFUSED",
  'замешательство': "CONFUSED",

  '生气': "ANGRY",
  'Angry': "ANGRY",
  'Zły': "ANGRY",
  'злость': "ANGRY",

  '睡着': "ASLEEP",
  'Asleep': "ASLEEP",
  'Śpiący': "ASLEEP",
  'сон': "ASLEEP",

  '惊讶': "SURPRISED",
  'Surprised': "SURPRISED",
  'Zaskoczony': "SURPRISED",
  'удивление': "SURPRISED",

  '傻傻的': "SILLY",
  'Silly': "SILLY",
  'Głupkowaty': "SILLY",
  'глупый': "SILLY",

  '极好的': "FABULOUS",
  'Fabulous': "FABULOUS",
  'Fantastyczny': "FABULOUS",
  'великолепно': "FABULOUS",

  '是': "YES",
  'Yes': "YES",
  'Tak': "YES",
  'да': "YES",

  '否': "NO",
  'No': "NO",
  'Nie': "NO",
  'нет': "NO",

  '不感兴趣的': "MEH",
  'Indifferent': "MEH",
  'Obojętny': "MEH",
  'безразличие': "MEH",

  '鸭子': "DUCK",
  'Duck': "DUCK",
  'Kaczka': "DUCK",
  'утка': "DUCK",

  '长颈鹿': "GIRAFFE",
  'Giraffe': "GIRAFFE",
  'Żyrafa': "GIRAFFE",
  'жираф': "GIRAFFE",

  '吃豆人': "PACMAN",
  'Pacman': "PACMAN",
  'Pac-Man': "PACMAN",
  'пакман': "PACMAN",

  '幽灵': "GHOST",
  'Ghost': "GHOST",
  'Duch': "GHOST",
  'призрак': "GHOST",

  '骷髅': "SKULL",
  'Skull': "SKULL",
  'Czaszka': "SKULL",
  'череп': "SKULL"
};
let DICT_musicPlay = {
  '鼓点叭叮': "BA_DING",
  'Drum Beat': "BA_DING",
  'Uderzenie bębna': "BA_DING",
  'ба-динь': "BA_DING",

  '反面角色': "BADDY",
  'Villain': "BADDY",
  'Złoczyńca': "BADDY",
  'злодей': "BADDY",

  '生日快乐': "BIRTHDAY",
  'Happy Birthday': "BIRTHDAY",
  'Wszystkiego Najlepszego': "BIRTHDAY",
  'с днём рождения': "BIRTHDAY",

  '布鲁斯': "BLUES",
  'Blues': "BLUES",
  'блюз': "BLUES",

  '追逐': "CHASE",
  'Chase': "CHASE",
  'Pościg': "CHASE",
  'погоня': "CHASE",

  '哒哒哒噔': "DADADADUM",
  'Da Da Da Dum': "DADADADUM",
  'да-да-да-дум': "DADADADUM",

  '演艺人': "ENTERTAINER",
  'Entertainer': "ENTERTAINER",
  'Artysta': "ENTERTAINER",
  'артист': "ENTERTAINER",

  '葬礼': "FUNERAL",
  'Funeral': "FUNERAL",
  'Pogrzeb': "FUNERAL",
  'похороны': "FUNERAL",

  '放克音乐': "FUNK",
  'Funk': "FUNK",
  'фанк': "FUNK",

  '向下跳': "JUMP_DOWN",
  'Jump Down': "JUMP_DOWN",
  'Skok w dół': "JUMP_DOWN",
  'прыжок вниз': "JUMP_DOWN",

  '向上跳': "JUMP_UP",
  'Jump Up': "JUMP_UP",
  'Skok w górę': "JUMP_UP",
  'прыжок вверх': "JUMP_UP",

  '彩虹猫': "NYAN",
  'Nyan Cat': "NYAN",
  'кот Нян': "NYAN",

  '欢乐颂': "ODE",
  'Ode to Joy': "ODE",
  'Oda do radości': "ODE",
  'ода радости': "ODE",

  '能力减弱': "POWER_DOWN",
  'Power Down': "POWER_DOWN",
  'Wyłączenie': "POWER_DOWN",
  'ослабление': "POWER_DOWN",

  '能力增强': "POWER_UP",
  'Power Up': "POWER_UP",
  'Włączenie': "POWER_UP",
  'усиление': "POWER_UP",

  '前奏': "PRELUDE",
  'Prelude': "PRELUDE",
  'Preludium': "PRELUDE",
  'прелюдия': "PRELUDE",

  '笑点': "PUNCHLINE",
  'Punchline': "PUNCHLINE",
  'Puenta': "PUNCHLINE",
  'шутка': "PUNCHLINE",

  'PYTHON': "PYTHON",
  'Python': "PYTHON",

  '铃声': "RINGTONE",
  'Ringtone': "RINGTONE",
  'Dzwonek': "RINGTONE",
  'рингтон': "RINGTONE",

  '哇哇哇哇': "WAWAWAWAA",
  'Wah Wah Sound': "WAWAWAWAA",
  'Dźwięk wah-wah': "WAWAWAWAA",
  'ва-ва-ва-ва': "WAWAWAWAA",

  '婚礼': "WEDDING",
  'Wedding': "WEDDING",
  'Ślub': "WEDDING",
  'свадьба': "WEDDING"
};
let DICT_audioPlay = {
  '咯咯笑': "GIGGLE",
  'Giggle': "GIGGLE",
  'Chichot': "GIGGLE",
  'хихиканье': "GIGGLE",

  '快乐': "HAPPY",
  'Happy': "HAPPY",
  'Szczęśliwy': "HAPPY",
  'радость': "HAPPY",

  '你好': "HELLO",
  'Hello': "HELLO",
  'Cześć': "HELLO",
  'привет': "HELLO",

  '神秘的': "MYSTERIOUS",
  'Mysterious': "MYSTERIOUS",
  'Tajemniczy': "MYSTERIOUS",
  'таинственный': "MYSTERIOUS",

  '难过': "SAD",
  'Sad': "SAD",
  'Smutny': "SAD",
  'грусть': "SAD",

  '滑': "SLIDE",
  'Slide': "SLIDE",
  'Ślizg': "SLIDE",
  'скольжение': "SLIDE",

  '飙升': "SOARING",
  'Soaring': "SOARING",
  'Szybowanie': "SOARING",
  'взлёт': "SOARING",

  '弹簧': "SPRING",
  'Spring': "SPRING",
  'Sprężyna': "SPRING",
  'пружина': "SPRING",

  '闪烁': "TWINKLE",
  'Twinkle': "TWINKLE",
  'Migotanie': "TWINKLE",
  'мерцание': "TWINKLE",

  '打哈欠': "YAWN",
  'Yawn': "YAWN",
  'Ziewanie': "YAWN",
  'зевок': "YAWN"
};
let DICT_gesturePlay = {
  '摇晃': "shake",
  'Shake': "shake",
  'Potrząśnij': "shake",
  'встряхивание': "shake",

  '标志朝上': "up",
  'Logo Up': "up",
  'Logo w górę': "up",
  'логотип вверх': "up",

  '标志朝下': "down",
  'Logo Down': "down",
  'Logo w dół': "down",
  'логотип вниз': "down",

  '正面朝上': "face up",
  'Face Up': "face up",
  'Twarzą w górę': "face up",
  'экран вверх': "face up",

  '正面朝下': "face down",
  'Face Down': "face down",
  'Twarzą w dół': "face down",
  'экран вниз': "face down",

  '左': "left",
  'Left': "left",
  'Lewo': "left",
  'влево': "left",

  '右': "right",
  'Right': "right",
  'Prawo': "right",
  'вправо': "right",

  '自由落体': "freefall",
  'Free Fall': "freefall",
  'Swobodny spadek': "freefall",
  'свободное падение': "freefall",

  '3g': "3g",
  '3G': "3g"
};
let DICT_magnetStrengthPlay = {
  'X': "get_x",
  'Y': "get_y",
  'Z': "get_z",

  'Oś X': "get_x",
  'Oś Y': "get_y",
  'Oś Z': "get_z",

  '强度': "get_field_strength",
  'Intensity': "get_field_strength",
  'Intensywność': "get_field_strength",
  'сила': "get_field_strength"
};
let DICT_speakerPlay = {
  '关闭': "off",
  'Off': "off",
  'Wyłączone': "off",
  'выключить': "off",

  '打开': "on",
  'On': "on",
  'Włączone': "on",
  'включить': "on"
};

