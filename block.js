Entry.staticBlocks = [
{
category: 'start',
blocks: [
'when_run_button_click',
'when_some_key_pressed',
'mouse_clicked',
'mouse_click_cancled',
'when_object_click',
'when_object_click_canceled',
'when_message_cast',
'message_cast',
'message_cast_wait',
'when_scene_start',
'start_scene',
'start_neighbor_scene',
'check_object_property',
'check_block_execution',
'switch_scope',
'is_answer_submited',
'check_lecture_goal',
'check_variable_by_name',
'show_prompt',
'check_goal_success',
'positive_number',
'negative_number',
'wildcard_string',
'wildcard_boolean',
'register_score',
],
},
{
category: 'flow',
blocks: [
'wait_second',
'repeat_basic',
'repeat_inf',
'repeat_while_true',
'stop_repeat',
'_if',
'if_else',
'wait_until_true',
'stop_object',
'restart_project',
'when_clone_start',
'create_clone',
'delete_clone',
'remove_all_clones',
],
},
{
category: 'moving',
blocks: [
'move_direction',
'bounce_wall',
'move_x',
'move_y',
'move_xy_time',
'locate_x',
'locate_y',
'locate_xy',
'locate_xy_time',
'locate',
'locate_object_time',
'rotate_relative',
'direction_relative',
'rotate_by_time',
'direction_relative_duration',
'rotate_absolute',
'direction_absolute',
'see_angle_object',
'move_to_angle',
],
},
{
category: 'looks',
blocks: [
'show',
'hide',
'dialog_time',
'dialog',
'remove_dialog',
'change_to_some_shape',
'change_to_next_shape',
'add_effect_amount',
'change_effect_amount',
'erase_all_effects',
'change_scale_size',
'set_scale_size',
'flip_x',
'flip_y',
'change_object_index',
],
},
{
category: 'brush',
blocks: [
'brush_stamp',
'start_drawing',
'stop_drawing',
'set_color',
'set_random_color',
'change_thickness',
'set_thickness',
'change_brush_transparency',
'set_brush_tranparency',
'brush_erase_all',
],
},
{
category: 'text',
blocks: ['text_blue', 'text_orange', 'text_Yello', 'text_gray ', 'text_flush'],
},
{
category: 'sound',
blocks: [
'sound_something_with_block',
'sound_something_second_with_block',
'sound_from_to',
'sound_something_wait_with_block',
'sound_something_second_wait_with_block',
'sound_from_to_and_wait',
'sound_volume_change',
'sound_volume_set',
'sound_silent_all',
],
},
{
category: 'judgement',
blocks: [
'is_clicked',
'is_press_some_key',
'reach_something',
'boolean_basic_operator',
'boolean_and_or',
'boolean_not',
],
},
{
category: 'calc',
blocks: [
'calc_basic',
'calc_rand',
'coordinate_mouse',
'coordinate_object',
'get_sound_volume',
'quotient_and_mod',
'calc_operation',
'get_project_timer_value',
'choose_project_timer_action',
'set_visible_project_timer',
'get_date',
'distance_something',
'get_sound_duration',
'get_user_name',
'length_of_string',
'combine_something',
'char_at',
'substring',
'index_of_string',
'replace_string',
'change_string_case',
],
},
{
category: 'variable',
blocks: [
'variableAddButton',
'listAddButton',
'ask_and_wait',
'get_canvas_input_value',
'set_visible_answer',
'get_variable',
'change_variable',
'set_variable',
'show_variable',
'hide_variable',
'value_of_index_from_list',
'add_value_to_list',
'remove_value_from_list',
'insert_value_to_list',
'change_value_list_index',
'length_of_list',
'is_included_in_list',
'show_list',
'hide_list',
],
},
{
category: 'func',
blocks: ['functionAddButton'],
},
{
category: 'analysis',
blocks: [
'analizyDataAddButton',
'append_row_to_table',
'insert_row_to_table',
'delete_row_from_table',
'set_value_from_table',
'get_table_count',
'get_value_from_table',
'calc_values_from_table',
'open_table_chart',
'close_table_chart',
],
},
{
category: 'ai_utilize',
blocks: [
'aiUtilizeBlockAddButton',
'aiUtilizeModelTrainButton',
'audio_title',
'check_microphone',
'speech_to_text_convert',
'speech_to_text_get_value',
'get_microphone_volume',
'tts_title',
'read_text',
'read_text_wait_with_block',
'set_tts_property',
'translate_title',
'get_translated_string',
'check_language',
'video_title',
'video_draw_webcam',
'video_check_webcam',
'video_flip_camera',
'video_set_camera_opacity_option',
'video_motion_value',
'video_toggle_model',
'video_is_model_loaded',
'video_number_detect',
'video_toggle_ind',
'video_body_part_coord',
'video_face_part_coord',
'video_detected_face_info',
],
},
{
category: 'expansion',
blocks: [
'expansionBlockAddButton',
'weather_title',
'check_weather',
'check_finedust',
'get_weather_data',
'get_current_weather_data',
'get_today_temperature',
'check_city_weather',
'check_city_finedust',
'get_city_weather_data',
'get_current_city_weather_data',
'get_today_city_temperature',
'festival_title',
'count_festival',
'get_festival_info',
'behaviorConductDisaster_title',
'count_disaster_behavior',
'get_disaster_behavior',
'behaviorConductLifeSafety_title',
'count_lifeSafety_behavior',
'get_lifeSafety_behavior',
],
},
{
category: 'arduino',
blocks: [
'arduino_reconnect',
'arduino_open',
'arduino_cloud_pc_open',
'arduino_connect',
'arduino_download_connector',
'download_guide',
'arduino_download_source',
'arduino_noti',
].concat(EntryStatic.DynamicHardwareBlocks),
}
];
EntryStatic.getAllBlocks = () => {
return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
{ category: 'start', visible: true },
{ category: 'flow', visible: true },
{ category: 'moving', visible: true },
{ category: 'looks', visible: true },
{ category: 'brush', visible: true },
{ category: 'text', visible: true },
{ category: 'sound', visible: true },
{ category: 'judgement', visible: true },
{ category: 'calc', visible: true },
{ category: 'variable', visible: true },
{ category: 'func', visible: true },
{ category: 'analysis', visible: true },
{ category: 'ai_utilize', visible: true },
{ category: 'expansion', visible: true },
{ category: 'arduino', visible: false },
{ category: category, visible: true }
]);
for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
}
}
Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
Entry.playground.blockMenu._generateCategoryCode(category);
if (options) {
if (options.background) {
$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
if (options.backgroundSize) {
$(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
}
}
if (options.name) {
$(`#entryCategory${category}`)[0].innerText = options.name
}
}
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
Entry.block[blockname] = {
color: color.color,
outerLine: color.outerline,
skeleton: skeleton,
statement: [],
params: params.params,
events: {},
def: {
params: params.def,
type: blockname
},
paramsKeyMap: params.map,
class: _class ? _class : 'default',
func: func,
template: template
}
}

// 블록 추가 시작

////////////////////
addBlock('fetch', '%1 가져오기', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: 'text',
params: ['https://playentry.org/api/discuss/findNotice']
}
],
map: {
APIURL: 0
}
}, 'text', async (sprite, script) => {
let res = await fetch(script.getValue('APIURL', script))
let data = await res.json()
return data
}, 'basic_string_field')
////////////////////

////////////////////
addBlock('array_number', '배열 %1 의 %2 번째 항목', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: 'text',
params: [`['1', '2']`]
},
{
type: 'text',
params: ['1']
}
],
map: {
ARRAY: 0,
NUM: 1
}
}, 'text', (sprite, script) => {
let array = eval(script.getValue('ARRAY', script))
let done = array[script.getValue('NUM', script) - 1]
return done
}, 'basic_string_field');
////////////////////

////////////////////
addBlock('json_length', 'JSON %1 의 항목 수', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: 'text',
params: [`{ 'title': 'Hello, world!' }`]
},
{
type: 'text',
params: ['title']
}
],
map: {
JSON: 0
}
}, 'text', (sprite, script) => {
let done = Object.keys(JSON.parse(script.getValue('JSON', script))).length
return done
}, 'basic_string_field')
////////////////////

////////////////////
addBlock('json_key', 'JSON %1 의 %2 항목', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: 'text',
params: [`{ 'title': 'Hello, world!' }`]
},
{
type: 'text',
params: ['title']
}
],
map: {
JSON: 0,
KEY: 1
}
}, 'text', (sprite, script) => {
let array = eval(script.getValue('JSON', script))
let done = array[script.getValue('KEY', script)]
return done
}, 'basic_string_field')
////////////////////

////////////////////
addBlock('array_length', '배열 %1 의 항목 수', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
}
],
def: [
{
type: 'text',
params: [`['1', '2']`]
}
],
map: {
ARRAY: 0
}
}, 'text', (sprite, script) => {
let done = eval(script.getValue('ARRAY', script)).length
return done
}, 'basic_string_field')
////////////////////

////////////////////
addBlock('toast', '%1 제목과 %2 내용의 %3 경고를 %4 출력하기%5', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Dropdown',
options: [
['성공했을때뜨는일종의경고', 'success'],
['잘못된블럭을섰을때나오는경고', 'warning'],
['오류가발생했을때나오는경고', 'alert']
],
fontSize: 11,
arrowColor: '#FFD974',
value: 'success'
},
{
type: 'Dropdown',
options: [
['사라지지않게', 'true'],
['잠시 뒤 사라지게', 'false']
],
fontSize: 11,
arrowColor: '#FFD974',
value: 'true'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`스폐셜`]
},
{
type: 'text',
params: [`블럭`]
},
null,
null,
null
],
map: {
TITLE: 0,
CONTENT: 1,
TYPE: 2,
HIDE: 3
}
}, 'text', (sprite, script) => {
let hide
if (script.getValue('HIDE', script) == 'true') {
hide = true
} else {
hide = false
}
eval(`Entry.toast.${script.getValue('TYPE', script)}('${script.getValue('TITLE', script)}', '${script.getValue('CONTENT', script)}', ${hide})`)
return script.callReturn()
})
////////////////////

////////////////////
addBlock('console', '%1 내용을 이컴퓨터(브라우저) 콘솔에 %2 하기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Dropdown',
options: [
['log', 'log'],
['warn', 'warn'],
['error', 'error'],
['info', 'info']
],
fontSize: 11,
arrowColor: '#FFD974',
value: 'log'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`엔트리`]
},
null,
null
],
map: {
CONTENT: 0,
TYPE: 1
}
}, 'text', (sprite, script) => {
eval(`console.${script.getValue('TYPE', script)}('${script.getValue('CONTENT', script)}')`)
return script.callReturn()
})
////////////////////

////////////////////
addBlock('console_clear', '이컴퓨터(브라우저) 콘솔 모두 지우기%1', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
null
],
map: {}
}, 'text', (sprite, script) => {
console.clear()
return script.callReturn()
})
////////////////////

////////////////////
addBlock('entry_console', '%1 내용을 엔트리 콘솔에 출력하기%2', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`엔트리`]
},
null
],
map: {
CONTENT: 0
}
}, 'text', (sprite, script) => {
Entry.console.print(script.getValue('CONTENT', script))
return script.callReturn()
})
////////////////////

////////////////////
addBlock('entry_console_clear', '엔트리 콘솔 모두 지우기%1', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
null
],
map: {}
}, 'text', (sprite, script) => {
Entry.console.clear()
return script.callReturn()
})
////////////////////

////////////////////
addBlock('get_browser', '컴퓨터이름(브라우저이름)', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [],
def: [],
map: {}
}, 'text', (sprite, script) => {
return Entry.userAgent
}, 'basic_string_field')
////////////////////

////////////////////
addBlock('change_var', '%1 값을 %2 으로 변경%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`user.username`]
},
{
type: 'text',
params: ['entry']
},
null
],
map: {
VARNAME: 0,
VALUE: 1
}
}, 'text', (sprite, script) => {
eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`)
return script.callReturn()
});
////////////////////

////////////////////
addBlock('entry_console_clear', '이블럭들을 만들 사람은john0817 원제작자 또라띠까%1', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
null
],
map: {}
}, 'text', (sprite, script) => {
Entry.console.clear()
return script.callReturn()
})
////////////////////

////////////////////
addBlock('post_commu', '%1 제목과 %2 내용의 글을 엔커뮤에 올리기%3', {
    color: EntryStatic.colorSet.block.default.HARDWAR,
    outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [`엔트리봇`]
        },
        {
            type: 'text',
            params: [`사랑스러워`]
        },
        null
    ],
    map: {
        TITLE: 0,
        CONTENT: 1
    }
}, 'text', (sprite, script) => {
    fetch('https://playentry.org/api/discuss/', {
        method: 'POST',
        body: `{ "images": [], "category": "free", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return script.callReturn()
})
////////////////////


// 블록 추가 끝


Entry.staticBlocks.push({
category: 'API', blocks: [
'fetch',
'array_number',
'array_length',
'json_key',
'json_length',
'post_commu',
'get_browser',
'toast',
'console',
'console_clear',
'entry_console',
'entry_console_clear',
'change_var'
]
});


updateCategory('API')

$('head').append(`
<style>
#entryCategoryAPI {
background-image: url(/lib/entry-js/images/hardware.svg);
background-repeat: no-repeat;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
margin-bottom: 1px;
}
.entrySelectedCategory#entryCategoryAPI {
background-image: url(/lib/entry-js/images/hardware_on.svg);
background-color: #00b6;
border-color: #00bb;
color: #ff;
}
</style>
`)

$('#entryCategoryAPI').append('스폐셜')
