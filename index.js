

var websiteName = document.getElementById("webname");
var websitelink = document.getElementById("weblink");
var websiteEmail = document.getElementById("webemail").value;
var generatebtn = document.getElementById("generate");
var generatetandcbtc = document.getElementById("generatet&cbtc");
var generateppbtc = document.getElementById("generateppbtc");
var whattogenerate = document.querySelector('.whattogenerate');
var showresult = document.querySelector(".showresult")
var resultcover = document.querySelector("#resultcover");
var backtoform = document.querySelector('.backtoform');
var formsec = document.querySelector('.formsec');
var generatedeclaimerbtc = document.querySelector('#generatedeclaimerbtc');
var backtogenerate = document.querySelector('.backtogenerate');
var resultcontainer2 = document.querySelector("#generate_result2");
var cancelallone = document.querySelector(".firstall-one");
var allone = document.querySelector(".all-one");
var getstated = document.querySelector(".getstated");
var downloadpdf = document.querySelector("#downloadpdf");
var copytext = document.querySelector("#copytext");

var getstated1 = document.querySelector(".getstated2");
var showtandcexample = document.querySelector(".showtandcexample");
var showppexample = document.querySelector(".showppexample");
var showdeclaimerexample = document.querySelector(".showdeclaimerexample");
var pppreviewcover = document.querySelector(".pppreviewcover");
var tandcpreview = document.querySelector(".tandcpreview");
var declaimerpreview = document.querySelector(".declaimerpreview");

var showtandcexample1 = document.querySelector("#showtandcexample1");
var showppexample1 = document.querySelector("#showppexample1");
var showdeclaimerexample1 = document.querySelector("#showdeclaimerexample1");



showppexample.addEventListener("click", e=> {
    if(pppreviewcover.style.display === "none" ){
        tandcpreview.style.display = "none"
        declaimerpreview.style.display = "none"
        pppreviewcover.style.display = "block"
    }
    else{
        pppreviewcover.style.display = "none"
   }
});

showdeclaimerexample.addEventListener("click", e=> {
    if(declaimerpreview.style.display === "none" ){
        tandcpreview.style.display = "none";
        declaimerpreview.style.display = "block";
        pppreviewcover.style.display = "none";
    }
    else{
        declaimerpreview.style.display = "none";
    }
})

showtandcexample.addEventListener("click", e=> {
    if( tandcpreview.style.display === "none" ){
        tandcpreview.style.display = "block";
        declaimerpreview.style.display = "none";
        pppreviewcover.style.display = "none";
    }
    else{
        tandcpreview.style.display = "none";
    }
})




// other dublicate



showppexample1.addEventListener("click", e=> {
    if(pppreviewcover.style.display === "none" ){
        tandcpreview.style.display = "none"
        declaimerpreview.style.display = "none"
        pppreviewcover.style.display = "block"
    }
    else{
        pppreviewcover.style.display = "none"
   }
});

showdeclaimerexample1.addEventListener("click", e=> {
    if(declaimerpreview.style.display === "none" ){
        tandcpreview.style.display = "none";
        declaimerpreview.style.display = "block";
        pppreviewcover.style.display = "none";
    }
    else{
        declaimerpreview.style.display = "none";
    }
})

showtandcexample1.addEventListener("click", e=> {
    if( tandcpreview.style.display === "none" ){
        tandcpreview.style.display = "block";
        declaimerpreview.style.display = "none";
        pppreviewcover.style.display = "none";
    }
    else{
        tandcpreview.style.display = "none";
    }
})




backtoform.addEventListener("click", e=> {
    whattogenerate.style.display = "none";
    formsec.style.display = "flex";
    resultcover.style.display = "none";

})

cancelallone.addEventListener("click", e=> {
   allone.style.display = "none";

})

getstated.addEventListener("click", e=> {
    allone.style.display = "flex";
 
 })
 
getstated1.addEventListener("click", e=> {
    allone.style.display = "flex";
 
 })

backtogenerate.addEventListener("click", e=> {
    whattogenerate.style.display = "flex";
    formsec.style.display = "none";
    resultcover.style.display = "none";

})


generatebtn.addEventListener("click", e=> {
    whattogenerate.style.display = "flex";
    formsec.style.display = "none";
})
     


  copytext.addEventListener("click",e =>{

 
     resultcontainer2.setSelectionRange(0,99999);

     navigator.clipboard.writeText(resultcontainer2.value)
alert("copied")
  })      


  //downloadpdf.addEventListener("click", e=> { })
  
generatetandcbtc.addEventListener("click", e => {
    var websiteName = document.getElementById("webname").value;
    var websiteEmail = document.getElementById("webemail").value;
    var resultcontainer  = document.getElementById("generate_result");

    var tandc = 
    `
    <h2><strong> Terms and Conditions</strong></h2>
                    
    <p>Welcome to ${websiteName}</p>
    
    <p>These terms and conditions outline the rules and regulations for the use of ${websiteName}'s Website, located at ${websiteName}
    . </p>
    
    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use ${websiteName}
     if you do not agree to take all of the terms and conditions stated on this page.
    
    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
    
    <h3><strong>Cookies</strong></h3>
    
    <p>We employ the use of cookies. By accessing ${websiteName}
    , you agreed to use cookies in agreement with the${websiteName}'s Privacy Policy.</p>
    
    <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
    
    <h3><strong>License</strong></h3>
    
    <p>Unless otherwise stated, ${websiteName} and/or its licensors own the intellectual property rights for all material on ${websiteName}
    . All intellectual property rights are reserved. You may access this from ${websiteName}
     for your own personal use subjected to restrictions set in these terms and conditions.</p>
    
    <p>You must not:</p>
    <ul>
        <li>Republish material from ${websiteName} </li>
    
        <li>Sell, rent or sub-license material from ${websiteName}</li>
        <li>Reproduce, duplicate or copy material from ${websiteName}
    </li>
        <li>Redistribute content from ${websiteName}</li>
    </ul>
    
    <p>This Agreement shall begin on the date hereof.</p>
    
    <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website.  ${websiteName} does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of ${websiteName},its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, ${websiteName} shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
    
    <p>${websiteName} reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
    
    <p>You warrant and represent that:</p>
    
    <ul>
        <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
        <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
        <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
        <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
    </ul>
    
    <p>You hereby grant ${websiteName} a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
    
    <h3><strong>Hyperlinking to our Content</strong></h3>
    
    <p>The following organizations may link to our Website without prior written approval:</p>
    
    <ul>
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
    </ul>
    
    <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
    
    <p>We may consider and approve other link requests from the following types of organizations:</p>
    
    <ul>
        <li>commonly-known consumer and/or business information sources;</li>
        <li>dot.com community sites;</li>
        <li>associations or other groups representing charities;</li>
        <li>online directory distributors;</li>
        <li>internet portals;</li>
        <li>accounting, law and consulting firms; and</li>
        <li>educational institutions and trade associations.</li>
    </ul>
    
    <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of ${websiteName}; and (d) the link is in the context of general resource information.</p>
    
    <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
    
    <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to ${websiteEmail}. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
    
    <p>Approved organizations may hyperlink to our Website as follows:</p>
    
    <ul>
        <li>By use of our corporate name; or</li>
        <li>By use of the uniform resource locator being linked to; or</li>
        <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
    </ul>
    
    <p>No use of ${websiteName}'s logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
    
    <h3><strong>iFrames</strong></h3>
    
    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
    
    <h3><strong>Content Liability</strong></h3>
    
    <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
    
    <h3><strong>Your Privacy</strong></h3>
    
    <p>Please read Privacy Policy</p>
    
    <h3><strong>Reservation of Rights</strong></h3>
    
    <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
    
    <h3><strong>Removal of links from our website</strong></h3>
    
    <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
    
    <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
    
    <h3><strong>Disclaimer</strong></h3>
    
    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
    
    <ul>
        <li>limit or exclude our or your liability for death or personal injury;</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
    </ul>
    
    <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
    
    <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
    
    `;
  resultcontainer2.value = tandc;
  resultcover.style.display = "block";
  whattogenerate.style.display = "none";

})



generatedeclaimerbtc.addEventListener("click", e=>{
    var websiteName = document.getElementById("webname").value;
    var websitelink = document.getElementById("weblink").value;
    var resultcontainer  = document.getElementById("generate_result");



    var e = `
<div>
        
<h1>Disclaimer for <b>${websiteName}</b></h1><p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <b>${websitelink}</b>. Our Disclaimer was generated with the help of the <a href="#">Disclaimer Generator</a>.</p><h2>Disclaimers for Your <b>${websiteName}</b></h2><p>All the information on this website - <b>${websiteEmail} </b> - is published in good faith and for general information purpose only. <b>${websiteName}</b>does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (<b>${websiteName}</b>), is strictly at your own risk. <b>${websiteName}</b>  will not be liable for any losses and/or damages in connection with the use of our website.</p><p>From our website,
     you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p><p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any
         information. Our Privacy Policy was created by the <a href="#">Privacy Policy Generator</a>.</p><h2>Consent</h2><p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p><h2>Update</h2><p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>

</div>
`
resultcontainer2.value = e;
resultcover.style.display = "block";
whattogenerate.style.display = "none";

})




generateppbtc.addEventListener("click", e => {
    var websiteName = document.getElementById("webname").value;
    var websiteEmail = document.getElementById("webemail").value;
    var resultcontainer  = document.getElementById("generate_result");
    var websitelink = document.getElementById("weblink").value;

    var pp = 
    `
         <p><b>Privacy Policy for ${websiteName}</b><br />
    At ${websiteName}, accessible at ${websitelink}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${websiteName} and how we use it.
    
    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at ${websiteEmail}
    
    This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ${websiteName}. This policy is not applicable to any information collected offline or via channels other than this website.<br /><br />
    
    <b>Consent</b><br />
    
    By using our website, you hereby consent to our Privacy Policy and agree to its terms.<br /><br />
    
    <b>Information we collect</b><br />
    
    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
    
    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
    
    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.<br /><br />
    
    <b>How we use your information</b><br />
    
    We use the information we collect in various ways, including to:
    
    Provide, operate, and maintain our webste
    Improve, personalize, and expand our webste
    Understand and analyze how you use our webste
    Develop new products, services, features, and functionality
    Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes
    Send you emails
    Find and prevent fraud<br /><br />
             
    <b>Log Files</b><br />
    
    ${websiteName} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.<br /><br />
    
    <b>Cookies and Web Beacons</b><br />
    Like any other website, ${websiteName} uses ‘cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.<br /><br />
    
    <b>DoubleClick DART Cookie</b><br />
    Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to ${websitelink} and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads.
    
    Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.<br /><br />
    
    Google
    
    https://policies.google.com/technologies/ads<br /><br />
    
    <b>Advertising Partners Privacy Policies</b><br />
    
    You may consult this list to find the Privacy Policy for each of the advertising partners of ${websiteName}.
    
    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Website Name, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
    
    Note that Website Name has no access to or control over these cookies that are used by third-party advertisers.<br /><br />
    
    <b>Third-Party Privacy Policies</b><br />
    
    ${websiteName} Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
    
    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?<br /><br />
    
    <b>CCPA Privacy Policy (Do Not Sell My Personal Information)</b><br />
    
    Under the CCPA, among other rights, California consumers have the right to:
    
    Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
    
    Request that a business delete any personal data about the consumer that a business has collected.
    
    Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
    
    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.<br /><br />
    
    <b>GDPR Privacy Policy (Data Protection Rights)</b><br />
    
    We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
    
    The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
    
    The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
    
    The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
    
    The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
    
    The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
    
    The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
    
    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.<br /><br />
    
    <b>Children's Information</b><br />
    
    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
    
    ${websiteName} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p><br />
   
    
    `
    resultcover.style.display = "block";

    whattogenerate.style.display = "none";
    resultcontainer2.value = pp;
})







