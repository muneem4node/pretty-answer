module.exports = (muneem) => {

    muneem.addToAnswer("timeOut", function (){
        this.close( 408, "Manually closed due to time our");
    });

    muneem.addToAnswer("rejectContent", function (){
        this.close( 413, "Manually closed due to content rejection");
    });

    muneem.addToAnswer("rejectURI", function (){
        this.close( 414, "Manually closed due to URI rejection");
    });

    muneem.addToAnswer("rejectMimeType", function (){
        this.close( 415, "Manually closed due to Mime type rejection");
    });

    muneem.addToAnswer("notFound", function (){
        this.close( 404, "Manually closed as resource is not found");
    });

    muneem.addToAnswer("badData", function (){
        this.close( 400, "Manually closed due to bad data");
    });

    muneem.addToAnswer("move", function (){
        this.close( 301, "Manually closed as resource has been moved");
    });

    muneem.addToAnswer("unauthorized", function (){
        this.close( 401, "Manually closed due to authorization");
    });

    muneem.addToAnswer("forbidden", function (){
        this.close( 403, "Manually closed as forbidden");
    });

    muneem.addToAnswer("error", function (){
        this.close( 500, "Manually closed due to some error");
    });

}