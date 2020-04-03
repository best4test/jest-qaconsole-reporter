class QAconsoleReporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }
   
    onRunStart (results, options) {}

    onTestStart (test) {}

    onTestResult (test, testResult, aggregatedResult) {}

    onRunComplete(contexts, results) {        
        if (this._options["url"] === undefined) {
            console.log("qaconsole - url is not provided");
            return;
        }
        if (this._options["apiKey"] === undefined) {
            console.log("qaconsole - apiKey is not provided");
            return;
        }
        if (this._options["projectName"] === undefined) {
            console.log("qaconsole - projectName is not provided");
            return;
        }
        if (this._options["environment"] === undefined) {
            console.log("qaconsole - environment is not provided");
            return;
        }

        results.projectName = this._options["projectName"];
        results.environment = this._options["environment"];
        
        var request = require('sync-request');
		var res = request('POST', this._options["url"]+'testruns', {
          headers:{"apiKey":this._options["apiKey"]},
		  json: results
		});

    }
}

module.exports = QAconsoleReporter;