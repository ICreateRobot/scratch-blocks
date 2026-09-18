/**
 * Visual Blocks Language
 *
 * Copyright 2020 openblock.cc.
 * https://github.com/openblockcc/openblock-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.Arduino.extension');

goog.require('Blockly.Arduino');


Blockly.Arduino['arduinouno_setIoMode']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let CHOICE=block.getFieldValue('CHOICE') || 'False';
    let code
    
    console.log(PIN,CHOICE)
    code=`pinMode(${PIN}, ${CHOICE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_setDigital']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let CHOICE=block.getFieldValue('CHOICE') || 'False';
    let code
    
    code=`digitalWrite(${PIN}, ${CHOICE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_setAnalog']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let CHOICE=block.getFieldValue('CHOICE') || 'False';
    let code
    
    code=`analogWrite(${PIN}, ${CHOICE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}


Blockly.Arduino['arduinouno_digitalRead']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let code
    
    code=`digitalRead(${PIN})`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_analogRead']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let code
    
    code=`analogRead(${PIN})`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_setBaudrate']=function(block){

    let BAUD=Blockly.Arduino.valueToCode(block, 'BAUD',Blockly.Arduino.ORDER_NONE) || 'False';
    let code
    
    code=`Serial.begin(${BAUD});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_serialAny']=function(block){

    let code
    
    code=`Serial.available()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_serialRead']=function(block){

    let code
    
    code=`Serial.read()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}


Blockly.Arduino['arduinouno_serialPrint']=function(block){

    let TEXT=Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE) || 'False';
    let code
    
    code=`Serial.println(${TEXT});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}
Blockly.Arduino['arduinouno_createOled']=function(block){

    let WIDTH=Blockly.Arduino.valueToCode(block, 'WIDTH',Blockly.Arduino.ORDER_NONE) || 'False';
    let HEIGHT=Blockly.Arduino.valueToCode(block, 'HEIGHT',Blockly.Arduino.ORDER_NONE) || 'False';
    let code
    
    // code=`Adafruit_SSD1306 display(${WIDTH}, ${HEIGHT}, &Wire, -1);\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        Blockly.Arduino.definitions_['arduinouno_createOled'] = `Adafruit_SSD1306 display(${WIDTH}, ${HEIGHT}, &Wire, -1);\n`;
        return '';
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_initOled']=function(block){

    let ADDR=Blockly.Arduino.valueToCode(block, 'ADDR',Blockly.Arduino.ORDER_NONE) || 'False';
    ADDR = ADDR.trim().replace(/^["'](.*)["']$/, '$1');
    let code
    
    code=`display.begin(SSD1306_SWITCHCAPVCC, ${ADDR});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_clearOled']=function(block){

    let code
    
    code=`display.clearDisplay();\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_setColor']=function(block){


    let COLOR=block.getFieldValue('COLOR') || 'False';
    let code
    
    code=`display.setTextColor(SSD1306_${COLOR},${COLOR=='WHITE'? 'SSD1306_BLACK':'SSD1306_WHITE'});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}


Blockly.Arduino['arduinouno_setTextSize']=function(block){

    let SIZE=Blockly.Arduino.valueToCode(block, 'SIZE',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.setTextSize(${SIZE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}


Blockly.Arduino['arduinouno_setTextPlace']=function(block){

    let X=Blockly.Arduino.valueToCode(block, 'X',Blockly.Arduino.ORDER_NONE) || 'False';
    let Y=Blockly.Arduino.valueToCode(block, 'Y',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.setCursor(${X}, ${Y});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_setTextCon']=function(block){

    let TEXT=Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.println(${TEXT});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_displayText']=function(block){

    
    let code
    
    code=`display.display();\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_createProteus']=function(block){

    // let TEXT=Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE) || 'False';
    
    // let code
    
    // code=`display.println(${TEXT});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <TM1637Display.h>'] = "#include <TM1637Display.h>";
        Blockly.Arduino.definitions_['TM1637Display display(2, 3);'] = "TM1637Display display(2, 3);";
        return '';
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_setBrightness']=function(block){

    let NUM=Blockly.Arduino.valueToCode(block, 'NUM',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.setBrightness(${NUM});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <TM1637Display.h>'] = "#include <TM1637Display.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['arduinouno_showNumber']=function(block){

    let NUM=Blockly.Arduino.valueToCode(block, 'NUM',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.showNumberDec(${NUM});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <TM1637Display.h>'] = "#include <TM1637Display.h>";
        return code;
    }else{
        return ''
    }
}


Blockly.Arduino['py32_setIoMode']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let CHOICE=block.getFieldValue('CHOICE') || 'False';
    let code
    
    console.log(PIN,CHOICE)
    code=`pinMode(${PIN}, ${CHOICE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_setDigital']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let CHOICE=block.getFieldValue('CHOICE') || 'False';
    let code
    
    code=`digitalWrite(${PIN}, ${CHOICE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_setAnalog']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let CHOICE=block.getFieldValue('CHOICE') || 'False';
    let code
    
    code=`analogWrite(${PIN}, ${CHOICE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}


Blockly.Arduino['py32_digitalRead']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let code
    
    code=`digitalRead(${PIN})`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Arduino['py32_analogRead']=function(block){

    let PIN=block.getFieldValue('PIN') || 'False';
    let code
    
    code=`analogRead(${PIN})`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Arduino['py32_setBaudrate']=function(block){

    let BAUD=Blockly.Arduino.valueToCode(block, 'BAUD',Blockly.Arduino.ORDER_NONE) || 'False';
    let code
    
    code=`Serial.begin(${BAUD});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_serialAny']=function(block){

    let code
    
    code=`Serial.available()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}

Blockly.Arduino['py32_serialRead']=function(block){

    let code
    
    code=`Serial.read()`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return [code,Blockly.Arduino.ORDER_NONE];
    }else{
        return ''
    }
}


Blockly.Arduino['py32_serialPrint']=function(block){

    let TEXT=Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE) || 'False';
    let code
    
    code=`Serial.println(${TEXT});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        // Blockly.Python.definitions_['from s4s import *'] = "from s4s import *";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_createOled']=function(block){

    let WIDTH=Blockly.Arduino.valueToCode(block, 'WIDTH',Blockly.Arduino.ORDER_NONE) || 'False';
    let HEIGHT=Blockly.Arduino.valueToCode(block, 'HEIGHT',Blockly.Arduino.ORDER_NONE) || 'False';
    let code
    
    // code=`Adafruit_SSD1306 display(${WIDTH}, ${HEIGHT}, &Wire, -1);\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        Blockly.Arduino.definitions_['py32_createOled'] = `Adafruit_SSD1306 display(${WIDTH}, ${HEIGHT}, &Wire, -1);\n`;
        return '';
    }else{
        return ''
    }
}

Blockly.Arduino['py32_initOled']=function(block){

    let ADDR=Blockly.Arduino.valueToCode(block, 'ADDR',Blockly.Arduino.ORDER_NONE) || 'False';
    let SDA=block.getFieldValue('SDA') || 'False';
    let SCL=block.getFieldValue('SCL') || 'False';
    ADDR = ADDR.trim().replace(/^["'](.*)["']$/, '$1');
    let code
    
    code=`Wire.setSDA(${SDA});\nWire.setSCL(${SCL});\nWire.begin();\ndisplay.begin(SSD1306_SWITCHCAPVCC, ${ADDR});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_clearOled']=function(block){

    let code
    
    code=`display.clearDisplay();\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_setColor']=function(block){


    let COLOR=block.getFieldValue('COLOR') || 'False';
    let code
    
    code=`display.setTextColor(SSD1306_${COLOR},${COLOR=='WHITE'? 'SSD1306_BLACK':'SSD1306_WHITE'});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}


Blockly.Arduino['py32_setTextSize']=function(block){

    let SIZE=Blockly.Arduino.valueToCode(block, 'SIZE',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.setTextSize(${SIZE});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}


Blockly.Arduino['py32_setTextPlace']=function(block){

    let X=Blockly.Arduino.valueToCode(block, 'X',Blockly.Arduino.ORDER_NONE) || 'False';
    let Y=Blockly.Arduino.valueToCode(block, 'Y',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.setCursor(${X}, ${Y});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_setTextCon']=function(block){

    let TEXT=Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.println(${TEXT});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_displayText']=function(block){

    
    let code
    
    code=`display.display();\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <Wire.h>'] = "#include <Wire.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_GFX.h>'] = "#include <Adafruit_GFX.h>";
        Blockly.Arduino.definitions_['#include <Adafruit_SSD1306.h>'] = "#include <Adafruit_SSD1306.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_createProteus']=function(block){

    // let TEXT=Blockly.Arduino.valueToCode(block, 'TEXT',Blockly.Arduino.ORDER_NONE) || 'False';
    
    // let code
    
    // code=`display.println(${TEXT});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <TM1637Display.h>'] = "#include <TM1637Display.h>";
        Blockly.Arduino.definitions_['TM1637Display display(PA14, PA13);'] = "TM1637Display display(PA14, PA13);";
        return '';
    }else{
        return ''
    }
}

Blockly.Arduino['py32_setBrightness']=function(block){

    let NUM=Blockly.Arduino.valueToCode(block, 'NUM',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.setBrightness(${NUM});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <TM1637Display.h>'] = "#include <TM1637Display.h>";
        return code;
    }else{
        return ''
    }
}

Blockly.Arduino['py32_showNumber']=function(block){

    let NUM=Blockly.Arduino.valueToCode(block, 'NUM',Blockly.Arduino.ORDER_NONE) || 'False';
    
    let code
    
    code=`display.showNumberDec(${NUM});\n`

    let parent=block
    while (parent.getParent()) {
        parent = parent.getParent();
    }
	if(parent.type=='event_when' || parent.type=='procedures_definition'){
        Blockly.Arduino.definitions_['#include <TM1637Display.h>'] = "#include <TM1637Display.h>";
        return code;
    }else{
        return ''
    }
}