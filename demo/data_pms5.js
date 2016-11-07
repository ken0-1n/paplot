(function() {
msig_data = {};

msig_data.tooltip_format = {
    ref0:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref1:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref2:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref3:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},ref4:{format:[[{label:'A: ',type:'fix',keys:[],ext:''},{label:'{a}',type:'numeric',keys:['a',],ext:'.2'},],[{label:'C: ',type:'fix',keys:[],ext:''},{label:'{c}',type:'numeric',keys:['c',],ext:'.2'},],[{label:'G: ',type:'fix',keys:[],ext:''},{label:'{g}',type:'numeric',keys:['g',],ext:'.2'},],[{label:'T: ',type:'fix',keys:[],ext:''},{label:'{t}',type:'numeric',keys:['t',],ext:'.2'},],], keys: '{a} {c} {g} {t} '},
    alt:{format:[[{label:'C -> A: ',type:'fix',keys:[],ext:''},{label:'{ca}',type:'numeric',keys:['ca',],ext:'.2'},],[{label:'C -> G: ',type:'fix',keys:[],ext:''},{label:'{cg}',type:'numeric',keys:['cg',],ext:'.2'},],[{label:'C -> T: ',type:'fix',keys:[],ext:''},{label:'{ct}',type:'numeric',keys:['ct',],ext:'.2'},],[{label:'T -> A: ',type:'fix',keys:[],ext:''},{label:'{ta}',type:'numeric',keys:['ta',],ext:'.2'},],[{label:'T -> C: ',type:'fix',keys:[],ext:''},{label:'{tc}',type:'numeric',keys:['tc',],ext:'.2'},],[{label:'T -> G: ',type:'fix',keys:[],ext:''},{label:'{tg}',type:'numeric',keys:['tg',],ext:'.2'},],], keys: '{ca} {cg} {ct} {ta} {tc} {tg} '},
    strand:{format:[[{label:'+ ',type:'fix',keys:[],ext:''},{label:'{plus}',type:'numeric',keys:['plus',],ext:'.2'},{label:' - ',type:'fix',keys:[],ext:''},{label:'{minus}',type:'numeric',keys:['minus',],ext:'.2'},],], keys: '{minus} {plus} '},
    mutation_title:{format:[[{label:'{id}',type:'str',keys:['id',],ext:''},],], keys: '{id} '},
    mutation_partial:{format:[[{label:'{sig}',type:'str',keys:['sig',],ext:''},{label:': ',type:'fix',keys:[],ext:''},{label:'{#sum_item_value}',type:'numeric',keys:['#sum_item_value',],ext:'.2'},],], keys: '{#sum_item_value} {sig} '},
};

msig_data.ref_reduce_rate = [1,1,1,1,1];
msig_data.label_colors = {'A': '#06B838', 'C': '#609CFF', 'G': '#B69D02', 'T': '#F6766D', 'plus': '#00BEC3', 'minus': '#F263E2'};
msig_data.signatures = ['signature 1','signature 2','signature 3','signature 4','background',];
msig_data.sig_colors = ['#f39700','#6cbb5a','#e60012','#00ada9','#9CAEB7',];
msig_data.Ids = ['TCGA-OR-A5J1','TCGA-OR-A5J2','TCGA-OR-A5J3','TCGA-OR-A5J4','TCGA-OR-A5J5','TCGA-OR-A5J6','TCGA-OR-A5J7','TCGA-OR-A5J8','TCGA-OR-A5J9','TCGA-OR-A5JA','TCGA-OR-A5JB','TCGA-OR-A5JC','TCGA-OR-A5JD','TCGA-OR-A5JE','TCGA-OR-A5JF','TCGA-OR-A5JG','TCGA-OR-A5JH','TCGA-OR-A5JI','TCGA-OR-A5JJ','TCGA-OR-A5JK','TCGA-OR-A5JL','TCGA-OR-A5JM','TCGA-OR-A5JO','TCGA-OR-A5JP','TCGA-OR-A5JQ','TCGA-OR-A5JR','TCGA-OR-A5JS','TCGA-OR-A5JT','TCGA-OR-A5JU','TCGA-OR-A5JV','TCGA-OR-A5JW','TCGA-OR-A5JX','TCGA-OR-A5JY','TCGA-OR-A5JZ','TCGA-OR-A5K0','TCGA-OR-A5K1','TCGA-OR-A5K2','TCGA-OR-A5K3','TCGA-OR-A5K4','TCGA-OR-A5K5','TCGA-OR-A5K6','TCGA-OR-A5K8','TCGA-OR-A5K9','TCGA-OR-A5KB','TCGA-OR-A5KO','TCGA-OR-A5KP','TCGA-OR-A5KQ','TCGA-OR-A5KS','TCGA-OR-A5KT','TCGA-OR-A5KU','TCGA-OR-A5KV','TCGA-OR-A5KW','TCGA-OR-A5KX','TCGA-OR-A5KY','TCGA-OR-A5KZ','TCGA-OR-A5L1','TCGA-OR-A5L2','TCGA-OR-A5L3','TCGA-OR-A5L4','TCGA-OR-A5L5','TCGA-OR-A5L6','TCGA-OR-A5L8','TCGA-OR-A5L9','TCGA-OR-A5LA','TCGA-OR-A5LB','TCGA-OR-A5LC','TCGA-OR-A5LD','TCGA-OR-A5LE','TCGA-OR-A5LF','TCGA-OR-A5LG','TCGA-OR-A5LH','TCGA-OR-A5LI','TCGA-OR-A5LJ','TCGA-OR-A5LK','TCGA-OR-A5LL','TCGA-OR-A5LN','TCGA-OR-A5LO','TCGA-OR-A5LP','TCGA-OR-A5LR','TCGA-OR-A5LS','TCGA-OR-A5LT','TCGA-OU-A5PI','TCGA-P6-A5OF','TCGA-P6-A5OH','TCGA-PA-A5YG','TCGA-PK-A5H8','TCGA-PK-A5H9','TCGA-PK-A5HA','TCGA-PK-A5HB','TCGA-PK-A5HC',];

msig_data.dataset_ref = [[[0.237,0.126,0.245,0.39],[0.103,0.114,0.523,0.258],[0,0.754,0,0.245],[0.219,0.275,0.248,0.255],[0.15,0.257,0.355,0.237],],[[0.121,0.368,0.38,0.129],[0.165,0.422,0.321,0.09],[0,0.623,0,0.376],[0.122,0.171,0.546,0.159],[0.113,0.36,0.422,0.103],],[[0.206,0.267,0.319,0.206],[0.333,0.283,0.263,0.119],[0,0.955,0,0.044],[0.02,0.016,0.959,0.002],[0.208,0.265,0.339,0.186],],[[0.272,0.229,0.245,0.252],[0.117,0.318,0.237,0.326],[0,0.986,0,0.013],[0.323,0.252,0.157,0.267],[0.25,0.194,0.294,0.259],],];
msig_data.dataset_alt = [[[0,0,0,0],[0.045,0,0.01,0.698],[0,0,0,0],[0,0.245,0,0],],[[0,0,0,0],[0.137,0,0.183,0.302],[0,0,0,0],[0.01,0.302,0.063,0],],[[0,0,0,0],[0,0,0,0.955],[0,0,0,0],[0.002,0.041,0.001,0],],[[0,0,0,0],[0.772,0,0.122,0.091],[0,0,0,0],[0.012,0.001,0,0],],];
msig_data.dataset_strand = [[0.469,0.53],[0.485,0.514],[0.541,0.458],[0.414,0.585],];

// [ID, signature, value]
msig_data.mutations = [[0,0,0.318000],[0,1,0.000000],[0,2,0.207000],[0,3,0.062000],[0,4,0.412000],[1,0,0.131000],[1,1,0.184000],[1,2,0.177000],[1,3,0.104000],[1,4,0.402000],[2,0,0.053000],[2,1,0.521000],[2,2,0.136000],[2,3,0.090000],[2,4,0.197000],[3,0,0.104000],[3,1,0.126000],[3,2,0.053000],[3,3,0.161000],[3,4,0.553000],[4,0,0.092000],[4,1,0.077000],[4,2,0.763000],[4,3,0.032000],[4,4,0.034000],[5,0,0.089000],[5,1,0.457000],[5,2,0.151000],[5,3,0.000000],[5,4,0.301000],[6,0,0.125000],[6,1,0.247000],[6,2,0.173000],[6,3,0.089000],[6,4,0.363000],[7,0,0.088000],[7,1,0.255000],[7,2,0.043000],[7,3,0.403000],[7,4,0.208000],[8,0,0.117000],[8,1,0.466000],[8,2,0.107000],[8,3,0.029000],[8,4,0.279000],[9,0,0.000000],[9,1,0.035000],[9,2,0.018000],[9,3,0.935000],[9,4,0.010000],[10,0,0.125000],[10,1,0.117000],[10,2,0.037000],[10,3,0.410000],[10,4,0.309000],[11,0,0.226000],[11,1,0.324000],[11,2,0.063000],[11,3,0.036000],[11,4,0.349000],[12,0,0.201000],[12,1,0.346000],[12,2,0.092000],[12,3,0.033000],[12,4,0.326000],[13,0,0.064000],[13,1,0.399000],[13,2,0.091000],[13,3,0.079000],[13,4,0.363000],[14,0,0.113000],[14,1,0.308000],[14,2,0.046000],[14,3,0.044000],[14,4,0.487000],[15,0,0.104000],[15,1,0.687000],[15,2,0.049000],[15,3,0.028000],[15,4,0.130000],[16,0,0.057000],[16,1,0.465000],[16,2,0.040000],[16,3,0.093000],[16,4,0.342000],[17,0,0.026000],[17,1,0.347000],[17,2,0.149000],[17,3,0.000000],[17,4,0.476000],[18,0,0.146000],[18,1,0.499000],[18,2,0.091000],[18,3,0.000000],[18,4,0.262000],[19,0,0.029000],[19,1,0.452000],[19,2,0.140000],[19,3,0.000000],[19,4,0.376000],[20,0,0.153000],[20,1,0.546000],[20,2,0.111000],[20,3,0.000000],[20,4,0.189000],[21,0,0.132000],[21,1,0.495000],[21,2,0.071000],[21,3,0.078000],[21,4,0.221000],[22,0,0.063000],[22,1,0.640000],[22,2,0.027000],[22,3,0.079000],[22,4,0.189000],[23,0,0.106000],[23,1,0.321000],[23,2,0.103000],[23,3,0.103000],[23,4,0.364000],[24,0,0.124000],[24,1,0.468000],[24,2,0.112000],[24,3,0.000000],[24,4,0.294000],[25,0,0.197000],[25,1,0.328000],[25,2,0.119000],[25,3,0.000000],[25,4,0.355000],[26,0,0.262000],[26,1,0.531000],[26,2,0.042000],[26,3,0.009000],[26,4,0.153000],[27,0,0.159000],[27,1,0.204000],[27,2,0.115000],[27,3,0.154000],[27,4,0.365000],[28,0,0.065000],[28,1,0.688000],[28,2,0.054000],[28,3,0.046000],[28,4,0.145000],[29,0,0.083000],[29,1,0.259000],[29,2,0.168000],[29,3,0.121000],[29,4,0.366000],[30,0,0.116000],[30,1,0.382000],[30,2,0.093000],[30,3,0.099000],[30,4,0.307000],[31,0,0.203000],[31,1,0.247000],[31,2,0.147000],[31,3,0.024000],[31,4,0.377000],[32,0,0.160000],[32,1,0.128000],[32,2,0.131000],[32,3,0.127000],[32,4,0.451000],[33,0,0.154000],[33,1,0.565000],[33,2,0.091000],[33,3,0.000000],[33,4,0.188000],[34,0,0.105000],[34,1,0.505000],[34,2,0.036000],[34,3,0.078000],[34,4,0.273000],[35,0,0.100000],[35,1,0.500000],[35,2,0.067000],[35,3,0.000000],[35,4,0.332000],[36,0,0.080000],[36,1,0.468000],[36,2,0.078000],[36,3,0.051000],[36,4,0.321000],[37,0,0.051000],[37,1,0.585000],[37,2,0.112000],[37,3,0.000000],[37,4,0.250000],[38,0,0.145000],[38,1,0.062000],[38,2,0.691000],[38,3,0.007000],[38,4,0.093000],[39,0,0.177000],[39,1,0.137000],[39,2,0.088000],[39,3,0.053000],[39,4,0.543000],[40,0,0.092000],[40,1,0.600000],[40,2,0.048000],[40,3,0.088000],[40,4,0.169000],[41,0,0.029000],[41,1,0.568000],[41,2,0.060000],[41,3,0.052000],[41,4,0.288000],[42,0,0.195000],[42,1,0.217000],[42,2,0.103000],[42,3,0.081000],[42,4,0.401000],[43,0,0.012000],[43,1,0.053000],[43,2,0.011000],[43,3,0.631000],[43,4,0.289000],[44,0,0.159000],[44,1,0.362000],[44,2,0.171000],[44,3,0.152000],[44,4,0.152000],[45,0,0.193000],[45,1,0.475000],[45,2,0.079000],[45,3,0.055000],[45,4,0.195000],[46,0,0.178000],[46,1,0.528000],[46,2,0.112000],[46,3,0.020000],[46,4,0.160000],[47,0,0.140000],[47,1,0.253000],[47,2,0.174000],[47,3,0.000000],[47,4,0.432000],[48,0,0.170000],[48,1,0.397000],[48,2,0.094000],[48,3,0.011000],[48,4,0.326000],[49,0,0.106000],[49,1,0.336000],[49,2,0.200000],[49,3,0.052000],[49,4,0.304000],[50,0,0.154000],[50,1,0.445000],[50,2,0.081000],[50,3,0.115000],[50,4,0.202000],[51,0,0.164000],[51,1,0.451000],[51,2,0.041000],[51,3,0.088000],[51,4,0.253000],[52,0,0.164000],[52,1,0.107000],[52,2,0.262000],[52,3,0.000000],[52,4,0.466000],[53,0,0.122000],[53,1,0.579000],[53,2,0.051000],[53,3,0.097000],[53,4,0.148000],[54,0,0.064000],[54,1,0.345000],[54,2,0.093000],[54,3,0.052000],[54,4,0.444000],[55,0,0.160000],[55,1,0.338000],[55,2,0.084000],[55,3,0.053000],[55,4,0.363000],[56,0,0.049000],[56,1,0.245000],[56,2,0.147000],[56,3,0.127000],[56,4,0.429000],[57,0,0.092000],[57,1,0.365000],[57,2,0.165000],[57,3,0.000000],[57,4,0.377000],[58,0,0.126000],[58,1,0.312000],[58,2,0.074000],[58,3,0.186000],[58,4,0.299000],[59,0,0.207000],[59,1,0.434000],[59,2,0.066000],[59,3,0.048000],[59,4,0.242000],[60,0,0.129000],[60,1,0.345000],[60,2,0.149000],[60,3,0.085000],[60,4,0.290000],[61,0,0.110000],[61,1,0.466000],[61,2,0.198000],[61,3,0.004000],[61,4,0.219000],[62,0,0.154000],[62,1,0.479000],[62,2,0.072000],[62,3,0.022000],[62,4,0.272000],[63,0,0.184000],[63,1,0.403000],[63,2,0.212000],[63,3,0.060000],[63,4,0.139000],[64,0,0.263000],[64,1,0.032000],[64,2,0.448000],[64,3,0.090000],[64,4,0.164000],[65,0,0.142000],[65,1,0.231000],[65,2,0.175000],[65,3,0.179000],[65,4,0.271000],[66,0,0.060000],[66,1,0.252000],[66,2,0.119000],[66,3,0.000000],[66,4,0.567000],[67,0,0.084000],[67,1,0.515000],[67,2,0.129000],[67,3,0.000000],[67,4,0.270000],[68,0,0.094000],[68,1,0.709000],[68,2,0.044000],[68,3,0.004000],[68,4,0.147000],[69,0,0.088000],[69,1,0.649000],[69,2,0.048000],[69,3,0.036000],[69,4,0.177000],[70,0,0.031000],[70,1,0.602000],[70,2,0.056000],[70,3,0.026000],[70,4,0.283000],[71,0,0.210000],[71,1,0.551000],[71,2,0.051000],[71,3,0.001000],[71,4,0.185000],[72,0,0.149000],[72,1,0.062000],[72,2,0.602000],[72,3,0.057000],[72,4,0.127000],[73,0,0.038000],[73,1,0.358000],[73,2,0.176000],[73,3,0.070000],[73,4,0.355000],[74,0,0.356000],[74,1,0.000000],[74,2,0.100000],[74,3,0.112000],[74,4,0.429000],[75,0,0.112000],[75,1,0.658000],[75,2,0.081000],[75,3,0.046000],[75,4,0.099000],[76,0,0.141000],[76,1,0.250000],[76,2,0.071000],[76,3,0.137000],[76,4,0.398000],[77,0,0.095000],[77,1,0.516000],[77,2,0.150000],[77,3,0.029000],[77,4,0.206000],[78,0,0.197000],[78,1,0.310000],[78,2,0.152000],[78,3,0.006000],[78,4,0.331000],[79,0,0.061000],[79,1,0.658000],[79,2,0.027000],[79,3,0.023000],[79,4,0.229000],[80,0,0.086000],[80,1,0.494000],[80,2,0.112000],[80,3,0.129000],[80,4,0.176000],[81,0,0.060000],[81,1,0.432000],[81,2,0.129000],[81,3,0.102000],[81,4,0.274000],[82,0,0.252000],[82,1,0.414000],[82,2,0.022000],[82,3,0.066000],[82,4,0.243000],[83,0,0.084000],[83,1,0.225000],[83,2,0.110000],[83,3,0.059000],[83,4,0.519000],[84,0,0.223000],[84,1,0.132000],[84,2,0.147000],[84,3,0.132000],[84,4,0.364000],[85,0,0.153000],[85,1,0.221000],[85,2,0.110000],[85,3,0.118000],[85,4,0.396000],[86,0,0.078000],[86,1,0.605000],[86,2,0.040000],[86,3,0.037000],[86,4,0.237000],[87,0,0.213000],[87,1,0.231000],[87,2,0.148000],[87,3,0.124000],[87,4,0.281000],[88,0,0.544000],[88,1,0.038000],[88,2,0.055000],[88,3,0.003000],[88,4,0.357000],[89,0,0.122000],[89,1,0.355000],[89,2,0.029000],[89,3,0.193000],[89,4,0.299000],];

msig_data.esc_Ids = [];
for (var i=0; i < msig_data.Ids.length; i++) {
    msig_data.esc_Ids[i] = 'Key' + i;
}

function tooltip_text(format, obj) {
    var tooltip = [];
    for (var t in format.format) {
        tooltip.push(utils.text_format(format.format[t], obj));
    }
    return tooltip;
};

function alt_data(sig_id) {
    
    var data = msig_data.dataset_alt[sig_id];

    var obj = {};
    obj['ca'] = data[1][0];
    obj['cg'] = data[1][2];
    obj['ct'] = data[1][3];
    obj['ta'] = data[3][0];
    obj['tc'] = data[3][1];
    obj['tg'] = data[3][2];
    
    var tooltip = tooltip_text(msig_data.tooltip_format['alt'], obj);
    
    return {
        data: data, 
        tooltip: tooltip, 
    };
};

function ref_data(sig_id, label) {
    
    var data = msig_data.dataset_ref[sig_id][Number(label.replace('ref', ''))];
    
    var obj = {};
    obj['a'] = data[0];
    obj['c'] = data[1];
    obj['g'] = data[2];
    obj['t'] = data[3];

    var tooltip = tooltip_text(msig_data.tooltip_format[label], obj);
    
    return {
        data: data, 
        tooltip: tooltip, 
    };
};

function strand_data(sig_id) {

    var data = msig_data.dataset_strand[sig_id];
    
    var obj = {};
    obj['plus'] = data[0];
    obj['minus'] = data[1];
    
    var tooltip = tooltip_text(msig_data.tooltip_format['strand'], obj);
    
    return {
        data: data, 
        tooltip: tooltip, 
    };
};
    
msig_data.get_dataset = function (sig_id, label) {
    
    var dataset = {};
    
    if (label == 'alt') {
        dataset = alt_data(sig_id);
    }
    else if(label.indexOf('ref') == 0) {
        dataset = ref_data(sig_id, label);
    }
    else if(label == 'strand') {
        dataset = strand_data(sig_id);
    }
    return dataset;
};

msig_data.get_bars_data = function () {
    
    var data = [];
    var keys = [];
    var tooltips = {};
    var sum_par_id = [];
    
    for (var i=0; i < msig_data.Ids.length; i++) {
        tooltips[msig_data.esc_Ids[i]] = [];
        sum_par_id[i] = 0;
    }
    
    // par func
    for (var f=0; f < msig_data.signatures.length; f++) {

        data[f] = [];
        keys[f] = [];

        // par ID
        for (var i=0; i < msig_data.Ids.length; i++) {
            
            var data_filt = msig_data.mutations.filter(function(item, index){
                if ((item[0] == i) && (item[1] == f)) return true;
            });
            
            //var sum = data_filt.length;
            var sum = 0;
            for (var s = 0; s < data_filt.length; s++) {
                sum += data_filt[s][2];
            }
            
            if (sum > 0) {
                data[f].push(sum);
                keys[f].push(msig_data.esc_Ids[i]);
                
                var obj = {
                    '#sum_mutaion_all': msig_data.mutations.length,
                    '#sum_item_value': sum,
                    'id': msig_data.Ids[i],
                    'sig': msig_data.signatures[f],
                };
                tooltips[msig_data.esc_Ids[i]].push(tooltip_text(msig_data.tooltip_format['mutation_partial'], obj));
                sum_par_id[i] += sum;
            }
        }
    }
    for (var i=0; i < msig_data.Ids.length; i++) {
        var obj = {
            '#sum_mutaion_all': msig_data.mutations.length,
            '#sum_item_value': sum_par_id[i],
            'id': msig_data.Ids[i],
        };
        
        title = tooltip_text(msig_data.tooltip_format['mutation_title'], obj);
        for (var t = 0; t < title.length; t++) {
            tooltips[msig_data.esc_Ids[i]].splice(t, 0, title[t]);
        }
    }
    
    return {data: data, key: keys, tooltip: tooltips};
};
})();
Object.freeze(msig_data);
