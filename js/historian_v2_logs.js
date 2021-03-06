/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.module('historian.historianV2Logs');
goog.module.declareLegacyNamespace();


/**
 * The CSV data, the name of the log source it was constructed from,
 * and optionally the start time of the log.
 * @typedef {{source: !Sources, csv: string, startMs: (number|undefined)}}
 */
exports.Log;


/**
 * The types of log sources.
 *
 * @enum {string}
 */
var Sources = {
  BATTERY_HISTORY: 'batteryhistory',
  EVENT_LOG: 'eventlog',
  KERNEL_TRACE: 'kerneltrace',
  LAST_LOGCAT: 'lastlogcat',
  POWERMONITOR: 'powermonitor',
  SYSTEM_LOG: 'systemlog',
  WEARABLE: 'wearable',

  // Data generated by Historian v2 on the JS side. e.g. KERNEL_UPTIME.
  GENERATED: 'generated'
};


/**
 * The types of log sources.
 *
 * @enum {string}
 */
exports.Sources = Sources;
