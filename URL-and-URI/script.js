
// *********** Section Of URL ************

// ASSIGNMENT

// Let's use the URL API again. This time, we'll parse a URL and print all the different parts. We'll learn more about each part later, for now, let's just split and print a URL!
// Complete the printURLParts function. It should print all the parts of a URL. For example, given this URL:

// http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash

// Your code should print:

// protocol: http:
// username: testuser
// password: testpass
// hostname: testdomain.com
// port: 8080
// pathname: /testpath
// search: ?testsearch=testvalue
// hash: #testhash
// Use the following properties on the URL object:

// protocol
// username
// password
// hostname
// port
// pathname
// search
// hash



function printURLParts(urlString) {
    const urlObj = new URL(urlString)

    console.log({
        protocol: `${urlObj.protocol}`,
        userName: `${urlObj.username}`,
        password: `${urlObj.password}`,
        hostname: `${urlObj.hostname}`,
        port: `${urlObj.port}`,
        pathname: `${urlObj.pathname}`,
        search: `${urlObj.search}`,
        hash: `${urlObj.hash}`,
    });
  }
  
  // don't touch below this line
  
  const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
  printURLParts(fantasyQuestURL)