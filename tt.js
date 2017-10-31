var fetch = require('node-fetch');
var https = require('https');
var baseURL = "https://esi.tech.ccp.is/latest";

async function QESI(section) {
    var url = baseURL + section;
    return await fetch(url).then(function(response) {
        //console.log(response);
        return response.json().then(function(data) {
            //console.log(data);
            return data;
        });
    });
}

exports.printMsg = function() {
    console.log("This is a message from the demo package");
}

exports.GetAlliances = async function() {
    return await QESI("/alliances/");
}

exports.GetAllianceName = async function(id) {
    return await QESI("/alliances/names/?alliance_ids="+id+"&datasource=tranquility");
}

exports.GetAllianceInfo = async function(id) {
    return await  QESI("/alliances/"+id+"/?datasource=tranquility");
}

exports.GetAllianceCorps = async function(id) {
    return await QESI("/alliances/"+id+"/corporations/?datasource=tranquility");
}

exports.GetAllianceIcon = async function(id) {
    return await QESI("/alliances/"+id+"/icons/?datasource=tranquility");
}
