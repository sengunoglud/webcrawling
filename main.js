const {crawlPage} = require("./crawl.js")

function main() {
    if (process.argv.length < 3) {
        console.log("no website provided.")
        process.exit(1)  //basic error code, something gone wrong
    }

    if (process.argv.length > 3) {
        console.log("too many command line args")
        process.exit(1)  //basic error code, something gone wrong
    }

    const baseURL = process.argv[2]

    console.log(`starting crawl of ${baseURL}`)
    crawlPage(baseURL)

}


main()