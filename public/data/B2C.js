'use strict';

const questions = [
    {
        questionNumber: 1,
        question: `
        Given a stop step configured in the steptype.js that calls a script module, 
        a developer needs to add a custom status code "NO_FILES_FOUND" in the script. The status does not represent an error condition. 

        Which code snippet completes this requirement?`,
        option1: `return 'NO_FILES_FOUND';`,
        option2: `this.status = 'NO_FILES_FOUND';
        return this;`,
        option3: `var Status = require('dw/system/Status');
        return new Status (Status.OK, 'NO_FILES_FOUND');`,
        option4: `var status = {succes: 'OK', message: 'NO_FILES_FOUND'};
        return status;`,
        answer: 3,
    },
    {
        questionNumber: 2,
        question: `
        Recent code changes to an existing cartridge do not appear correctly on a Storefront. 
        
        The developer confirms that the code is uploaded in the IDE and ensures that the cartridge is associated with the sandbox.

        Which two additional steps should the developer take to troubleshoot this problem?`,
        option1: `Check that the correct code version is selected.`,
        option2: `Check the Storefront site cartridge path.`,
        option3: `Check the Business Manager site cartridge path.`,
        option4: `Check that the search index was recently rebuilt.`,
        option5: `A and C are correct.`,
        option6: `A and D are correct.`,
        answer: 5,
    },    
    {
        questionNumber: 3,
        question: `
        A developer working on a simple web service integration is asked to add appropriate logging to allow future troubleshooting.
        
        According to logging best practices, which code should the developer write to log when an operation succeeds, 
        but has an unexpected outcome that may produce side effects?`,
        option1: `Logger.error('Unexpected service response.')`,
        option2: `Logger.debug('Unexpected service response.')`,
        option3: `Logger.warn('Unexpected service response.')`,
        option4: `Logger.info('Unexpected service response.')`,
        answer: 3,
    },
    {
        questionNumber: 4,
        question: `
        A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories 
        and household accessories. 
        
        Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?`,
        option1: `Create a Common Phrase Dictionary entry: car accessories.
        Use search mode Exact Match.`,
        option2: `Create a Synonym Dictionary entry: car accessories, household, technology,.
        Use search mode First Word.`,
        option3: `Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology.
        Use search mode Exact Match.`,
        option4: `Create a Synonym Phrase Dictionary entry: car accessories, !household, !technology.
        Use search mode Exact Match.`,
        answer: 1,
    },    
    {
        questionNumber: 5,
        question: `
        Which two of these situations are appropriate cases for using the B2C Commerce OCAPI?`,
        option1: `Updating inventory information from a management software.`,
        option2: `Extend System Objetc Type definitions with new attributes.`,
        option3: `Showing customer's information in their B2C Commerce "My Account" page`,
        option4: `Displaying a list of B2C Commerce products in a mobile app.`,
        option5: `B and D are correct.`,
        option6: `A and D are correct.`,
        answer: 6,
    },
    {
        questionNumber: 6,
        question: `
        A developer is asked to write a job that is responsible for updating the customer order based upon a trigger from the Order Management System (OMS). 
        
        While all the information for the order remains the same, the Order number provided by the OMS needs to replace the existing Order Number. 
        
        The developer chooses to use the B2C OCAPI hooks to update the order to achieve the above requirement.
        
        According to the best practices which OCAPI call should the developer use along with which OCAPI hook?`,
        option1: `PATCH /orders/{order_no} with dw.ocapi.shop.order.afterPATCH`,
        option2: `DELETE /orders/{old_order_no} with dw.ocapi.shop.order.afterDELETE`,
        option3: `POST /orders/{order_no} with dw.ocapi.shop.order.afterPOST`,
        option4: `PATCH /orders/{order_no} with dw.ocapi.shop.order.beforePATCH`,
        answer: 1,
    },
    {
        questionNumber: 7,
        question: `
        A developer is asked to create a new service instance that will call a remote web service. 
        
        Which method should the developer use to create the service instance?`,
        option1: `dw.svc.LocalServiceRegistry.createService()`,
        option2: `dw.svc.LocalServiceRegistry.getDefaultService()`,
        option3: `dw.svc.LocalServiceInstance.createService()`,
        option4: `dw.svc.webref.getDefaultService()`,
        answer: 1,
    },
    {
        questionNumber: 8,
        question: `
        A developer is tasked with implementing the necessary code for a new Page Designer component. 
        
        What are two purposes of the JSON metadata definition file that the developer creates?`,
        option1: `Defines regions within the component type.`,
        option2: `Defines the responsive layout of the rendered template.`,
        option3: `Defines the business and rendering logic of the component required by the merchant.`,
        option4: `Defines the attributes that a merchant enters when using the component type.`,
        option5: `A and D are correct.`,
        option6: `B and C are correct.`,
        answer: 5,
    },  
    {
        questionNumber: 9,
        question: `
        A developer is asked to create a controller endpoint that will be used in a client-side AJAX request. 
        
        Its purpose is to display updated information to the user when the request is completed, 
        without otherwise modifying the appearance of the current page.
        
        According to the SFRA practices, which method best supports this objective?`,
        option1: `res.render()`,
        option2: `res.log()`,
        option3: `res.print()`,
        option4: `res.json()`,
        answer: 4,
    },
    {
        questionNumber: 10,
        question: `
        What are two appropriate uses of the <isif> ISML tag that follow B2C Commerce and SFRA best practices?`,
        option1: `Display a section of the page to logged users only.`,
        option2: `Redirect users to the registration page if they are not logged in.`,
        option3: `Show a different <div> tag depending on a pdict boolean variable.`,
        option4: `Implement involved business logic through conditionals staments`,
        option5: `A and C are correct.`,
        option6: `C and D are correct.`,
        answer: 6,
    },  
    {
        questionNumber: 11,
        question: `
        A client has a requirement to render different content on the homepage based on if the customer is logged in or a guest user.
        
        What should a developer implement to achieve this requirement?`,
        option1: `Set the Content Asset configuration for a customer that is a registered, versus unregistered user.`,
        option2: `Write specific custom code in the Content Asset for a customer that is registered versus unregistered user.`,
        option3: `Set the Content Slot configuration so it is based on the system customer group registered versus unregistered.`,
        option4: `Add specific custom messages in a Page Designer for a customer that is a registered versus unregistered user.`,
        answer: 3,
    },
    {
        questionNumber: 12,
        question: `
        Given the sandbox with: 

        - Service configured and assigned to its profile and credential.
        - A code version that uses that service.
        - The requirement to limit the number of success or error calls the code can perform to a restricted number of calls per second.
        
        Which configuration should the developer perform?`,
        option1: `Set the rate limiter in the service profile and configure its values with the ones required.`,
        option2: `Set a new quota limit for the service profile with the required values.`,
        option3: `Set the service as limited and change the services profile site preferences with the required values.`,
        option4: `Set a new quota limit for the service profile and assign the service to it.`,
        answer: 1,
    },  
    {
        questionNumber: 13,
        question: `
        A merchant uploads an image using the Content Image Upload module of Business Manager.
        
        Which three modules can the merchant or developer use to display the image on the Storefront?`,
        option1: `Storefront catalogs`,
        option2: `Content assets`,
        option3: `ISML templates`,
        option4: `Content slots`,
        option5: `Payment types`,
        option6: `A, B, and D are correct.`,
        option7: `B, C, and D are correct.`,
        answer: 6,
    },
    {
        questionNumber: 14,
        question: `
        A developer receives a product image that needs to be uploaded to the catalog. What should the developer use to upload this image?`,
        option1: `Sites/Impex WebDAV Directory`,
        option2: `Content Image Import module of Business Manager`,
        option3: `Site Development Import and Export module of Business Manager`,
        option4: `Products and Catalogs module of Business Manager`,
        answer: 4,
    },  
    {
        questionNumber: 15,
        question: `
        function render (context) {
            // unrelated code here

            model.text_headline = content.text_headline;
            if (content.text_subline) {
                model.text_subline = content.text_subline;
            }

            model.text_alignment = content.text_alignment == 'Left' ? 'left' : 'center';

            // more unrelated code 

            return new Template ('expirence/components/assets/categorytile').render(model).text;
        }
        
        Given the code snippet above, what should be added after this code so it can be used for page component display?`,
        option1: `module.exports = render;`,
        option2: `base.render = render;`,
        option3: `module.exports.render = render;`,
        option4: `module.exports = server.exports();`,
        answer: 3,
    },  
    {
        questionNumber: 16,
        question: `
        A developer customized the Cart-Show controller route with a LINK cartridge that adds social media data. 
        There is a new requirement to add a dataLayer object to the Cart-Show controller route.
        
        How should the developer achieve this to ensure that no code change will be needed if the client decides to remove the LINK cartridge?`,
        option1: `Append Cart-Show controller route in the client cartridge and add dataLayer object to the viewData variable.`,
        option2: `Replace the Cart-Show controller route in client cartridge and add dataLayer object to the viewData variable.`,
        option3: `Replace the existing viewData variable with the dataLayer object in the Cart-Show controller route.`,
        option4: `Replace the Cart-Show route in client cartridge and add dataLayer object to the viewData variable. Ensure that the client cartridge is on the left of the LINK cartridge in cartridge path.`,
        answer: 1,
    },
     {
        questionNumber: 17,
        question: `
        A developer works on a multisite realm. A new site requires a different layout for the account landing page 
        but the business logic and data model remain same:

        - The existing code is in landing.isml and AccountControl.js in the app_custom_mystore cartridge.

        - The app_custom_mystore contains any custom code for all other business functions.

        - The cartridge path for the existing site is int_cybersource:int_paypal:app_custom_mystore:app_storefront_base.
        
        The developer creates a new cartridge named app_custom_newproject that constains only the landing.isml template for the new site.
        
        Following the best practices, which modification should be made to the new cartridge path?`,
        option1: `Set the cartridge path so that app_custom_mystore is before int_cybersource`,
        option2: `Set the cartridge path so that app_custom_newproject is before app_custom_mystore`,
        option3: `Set the cartridge path so that app_custom_newproject is in the farhest right position`,
        option4: `Set the cartridge path so that appcustom_newproject is between app_custom_mystore and app_storefront_base`,
        answer: 2,
    },  
    {
        questionNumber: 18,
        question: `
        Refer to this example snippet of an ISML template:

        <h2>Welcome back, \${pdict.username}.</h2>

        The "pdict.username" variable does not print correctly when used in a similar template. 
        
        Assuming that the variable is correct in the controller's "viewData".
        How should a developer temporarily modify their code to use a debugger and troubleshoot the issue in the template?`,
        option1: `Add an <isdebug> tag allow the inspection of global variables.`,
        option2: `Add a local <isinclude> tag to inspect the topLevel function in the call stack.`,
        option3: `Add an <isbreak> tag to have the debugger stop at the desired line.`,
        option4: `Add an <isscript> tag and Javascript with a breakpoint set`,
        answer: 2,
    },  
    {
        questionNumber: 19,
        question: `
        A developer cannot create a custom object in Business Manager because the attributes do not show. 
        The developer can view the object but not the attributes.

        Which action should the developer take to resolve the problem?`,
        option1: `Sort the attributes in the custom object type.`,
        option2: `Create an attribute group with the desired attributes in it.`,
        option3: `Set the attributes to site-specific replicable.`,
        option4: `Change the data type of the attributes.`,
        answer: 2,
    },  
    {
        questionNumber: 20,
        question: `
        A developer has custom debug statements in a script, but the messages are not showing up in the Storefront Toolkit Request Log.

        Which step needs to be completed to get the messages to appear in the Request Log?`,
        option1: `In Global Preferences, check the box for enabled custom logging in Request Log.`,
        option2: `In Custom Log Settings, check the DEBUG box for Select Log Levels Written to Files.`,
        option3: `In Site Preferences, check the box for enabled custom logging in Request Log.`,
        option4: `In Custom Log Settings, activate the logging category at DEBUG level.`,
        answer: 2,
    },
     {
        questionNumber: 21,
        question: `
        Given a customer environment configured with only the en_CA locale and the following new requirements:

        - To add a new locale for fr_CA.

        - To localize the address form with the new locale.

        - To make the localization usable even for new possible French locales, such as fr_FR.

        - The portion of form XML definition contained in the form file cartridge/forms/default/address.xml:

        <?xml version="1.0"?>
        <form xmlms = "htpp://www.demandware.com/xml/form/2008-04-19">
            <field formid="country" label="label.input.country" type="string" mandatory="true"/>
            ...
        </form>
        
        What is the right place to add the fr_CA translation for the country field label?
        `,
        option1: `/cartridge/forms/resources/address_fr.properties`,
        option2: `/cartridge/templates/resources/address_fr_CA.properties`,
        option3: `/cartridge/templates/resources/forms_fr.properties`,
        option4: `/cartridge/templates/resources/fr/forms.properties`,
        answer: 2,
    },
    {
        questionNumber: 22,
        question: `
        A developer needs to check for product inventory in all inventory lists using the Open Commerce API. An example request URL is: 
        
        http://refarch.demandware.net/dw/data/v18_3/inventory_lists/ecom-inventory/product_inventory_records/00883408601
        
        Which property should the developer check in the OCAPI settings to confirm the appropriate resource is enabled?`,
        option1: `resource_id`,
        option2: `client_id`,
        option3: `ecom-inventory`,
        option4: `methods`,
        answer: 1,
    },  
    {
        questionNumber: 23,
        question: `
        A developer has a sandbox with code to log a message during execution and the following code: 

        var Logger = require('dw/system/Logger');
        Logger.info(message);
        
        After the code executes, the developer does not see any log file with the message in the WebDAV folder.

        Which task does the developer need to perform to correct this issue?`,
        option1: `Set the root log level to debug.`,
        option2: `Request that the developer's account be given permission to the Log Center of the current realm.`,
        option3: `Set the log retention to a value higher than 0.`,
        option4: `Set the logging global preferences to true.`,
        answer: 2,
    },  
    {
        questionNumber: 24,
        question: `
        {
            "resource_id": "/sites/*/coupons/*",
            "methods": [
                "put"
            ],
            "read_attributes": "(**)",
            "write_attributes": "(**)"
        }
        
        Given the above OCAPI definitions, which permission or permissions apply?`,
        option1: `Allows external applications to create coupons.`,
        option2: `Allow external applications to create, update, and delete both coupons and coupons code.`,
        option3: `Allows external applications to update coupons.`,
        option4: `Allows external applications to create, update, and delete coupons.`,
        answer: 3,
    },
     {
        questionNumber: 25,
        question: `
        Given the following ISML template, how should a developer reference the product object in the current iteration of the basket?
        
        <isloop items="\${pdict.Basket.products}" var="product" status="loopStatus">
            ...
        </isloop>`,
        option1: `pdict.Basket.product[loopStatus]`,
        option2: `pdict.product`,
        option3: `product`,
        option4: `loopStatus.product`,
        answer: 3,
    },
    {
        questionNumber: 26,
        question: `
        A developer created a basic SFRA form to capture the customer's first name, last name, 
        and email address and render it on the next page. 
        
        The developer is able to see all form elements and is able to enter information and submit. 
        
        However, the developer notices that the submitted information is not getting rendered on the Storefront.
        
        Which two mistakes might cause this issue?`,
        option1: `The form definition is incorrect.`,
        option2: `The actionUrl does not have any form action set.`,
        option3: `The form object is not passed to the rendering template.`,
        option4: `The form does not pass all validations.`,
        option5: `A and B are correct.`,
        option6: `B and C are correct.`,
        answer: 6,
    },  
    {
        questionNumber: 27,
        question: `
        When looking at Custom Object instances for a site, a merchant notices that the creation date is not showing up 
        on the instances in Business Manager.
        
        Where should the developer add this attribute to the Custom Object so it is visible for the merchant to see in Business Manager?`,
        option1: `Add the creation date to the attributes of the Custom Object.`,
        option2: `Mark the existing creation date attribute as visible.`,
        option3: `Assing the current date/time to a new custom attribute, creationDate, via code.`,
        option4: `Add the creation date to the attribute group for the Custom Object.`,
        answer: 4,
    },  
    {
        questionNumber: 28,
        question: `
        What is accomplished by the code below?

        <isinclude url="\${URLUtils.url('Account-Header','mobile', true)}"</>`,
        option1: `Performs a remote include from the Account-Header endpoint.`,
        option2: `Performs a call to the Account-Header endpoint to allow mobile navigation.`,
        option3: `Creates a link to the Account-Header endpoint that allows mobile navigation.`,
        option4: `Performs a local include from the Account-Header endpoint.`,
        answer: 1,
    },
     {
        questionNumber: 29,
        question: `
        A developer has a specification to integrate with a REST API for retrieving traffic conditions. 
        The service expects parameters to be form encoded.
        
        Which service type should the developer register?`,
        option1: `POST Form`,
        option2: `HTML Form`,
        option3: `HTTP Form`,
        option4: `SOAP Form`,
        answer: 3,
    },
    {
        questionNumber: 30,
        question: `
        A developer is implementing a new Page Designer content on a merchant's Storefront 
        and adds the line below to the setupContentSearch function in the searchHelpers.js file:

        apiContentSearchModel.setFilteredByFolder(false);
        
        What does this achieve?`,
        option1: `Prevents Page Designer pages and components from being searchable.`,
        option2: `Enables searching to find Page Designer content assets that are not in folders.`,
        option3: `Filters Page Designer search results into separate page and component folders.`,
        option4: `Extends the ContentSearchModel to allow the folder filter.`,
        answer: 2,
    },  
    {
        questionNumber: 31,
        question: `
        In order to build the SFRA code to a developer sandbox for the first time.

        Which build steps should the developer perform for the site to appear and function as designed?`,
        option1: `npm run compile:js, npm run compile:scss, npm run compile:html`,
        option2: `npm run compile:js, npm run compile:html, npm run clean`,
        option3: `npm run compile:scss, npm run compile:html, npm run clean`,
        option4: `npm run compile:js, npm compile:scss, npm run compile:fonts`,
        answer: 4,
    },  
    {
        questionNumber: 32,
        question: `
        Business Manager has the configuration:

        - Active Log category is "root"
        - Log level of WARN
        
        The code below is executing:        
        var log = Logger.getLogger('products');
        
        Using this information, which two logs will be written?`,
        option1: `log.info('This is an info message');`,
        option2: `log.warn('This is a warn message');`,
        option3: `log.error('This is an error message');`,
        option4: `log.debug('This is a debug message');`,
        option5: `A and B are correct`,
        option6: `B and D and correct`,
        answer: 5,
    },
     {
        questionNumber: 33,
        question: `
        There is an existing job that captures and sends a report of all the SFCC orders in a day for North America at 12:00 AM EST. 
        
        The developer is asked to also send another report for all the orders placed for Europe at 12:00 AM UTC.
        
        How should a developer achieve both of these requirements?`,
        option1: `Use a flow and set up execution of both job steps at the specified time.`,
        option2: `Modify the existing job and add site-specific job run-times to the scheduling tab.`,
        option3: `Add a new job step to the existing North America Job to capture and send a report for all these Europe orders.`,
        option4: `Create a new job specific to Europe to run at the specified time.`,
        answer: 4,
    },
    {
        questionNumber: 34,
        question: `
        To ensure SFRA best practices and protect against request forgery, 
        the developer introduced CSFR token generation in the customer address form.
        
        <form ... action="submit">
            <input name="\${dw.web.CSRFProtection.getTokenName()}"
                    value="\${dw.web.CSRFProtection.generateToken()}">
            ...
            //the rest of the form fields
            ...
        </form>
        
        To implement CSFR protection when the form is submitted the developer needs to introduce the CSFR validation using one 
        or both of these methods as applicable:

        - validateRequest
        - validateAjaxRequest
        
        Where in the code does the developer need to add this CSRF validation check?`,
        option1: `In the model function that persists the form data.`,
        option2: `In the middleware chain of the controller post route.`,
        option3: `In the view function that handles the submitted form.`,
        option4: `In the controller function that displays the form.`,
        answer: 2,
    },  
    {
        questionNumber: 35,
        question: `
        A developer needs to perform the same additional checks before completing multiple routes in a custom controller, 
        in order to decide whether to render a template or redirect the user to a different page.
        
        According to SFRA best practices, what is the correct approach to improve code reusability in this scenario?`,
        option1: `Use the superModule property in the existing routes to extend their functionality.`,
        option2: `Define a new middleware function and use it in the existing routes.`,
        option3: `Append a new function to all the existing routes with the server module.`,
        option4: `Replace the existing routes by creating a controller in separate new cartridge.`,
        answer: 2,
    },  
    {
        questionNumber: 36,
        question: `
        A developer has a B2C site and a merchant requirement to add a new locale to it.

        What are the steps to enable the locale in the Storefront?`,
        option1: `Update the language under the Organization Profile section.`,
        option2: `Create and configure the locale under Global Preferences section and activate it in Site Preferences.`,
        option3: `Create, configure, and activate the locale under Global Preferences section.`,
        option4: `Add an alias for the new locale and then create and configure the locale itself under Global Preferences section.`,
        answer: 3,
    },
     {
        questionNumber: 37,
        question: `
        Multiple customers report slow performance on the Product Details Page.

        Which tool can a developer use to view average response times for the Product-Detail controller route?`,
        option1: `URL Request Analyzer`,
        option2: `Request Logs`,
        option3: `Pipeline Debugger`,
        option4: `Pipeline Profiler`,
        answer: 1,
    },
    {
        questionNumber: 38,
        question: `
        Given the requirements:

        - To show the washing instructions for a clothing product on a dedicated section the detail page.

        - Washing instructions come from the product information manager (PIM).

        - To have this attribute available to localize in the Storefront.
        
        Which action meets these requirements?`,
        option1: `Add a resource file for a every locale for which the attribute needs to be translated.`,
        option2: `Add a custom attribute for each locale.`,
        option3: `Create a custom attribute on the product system object and set it as localizable.`,
        option4: `Set the product system object type as localizable.`,
        answer: 3,
    },  
    {
        questionNumber: 39,
        question: `
        A merchant wants customers to be able to order gift vouchers via their site. 
        Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all times.

        How can a developer use Business Manager to ensure that the gift vouchers are always available?`,
        option1: `Manually set the inventory to a high number.`,
        option2: `Check the perpetual flag in the product inventory record.`,
        option3: `Check the Available to Sell (ATS) flag for the product set.`,
        option4: `Set StockLevel = maxAllocation for the product.`,
        answer: 2,
    },  
    {
        questionNumber: 40,
        question: `
        A client has two B2C Commerce sites in the same instance:

        - One U.S. market.
        - The other for the European market.
        
        The product they make are sold with different safety certificates based on the world location. For example:

        - They sell a smartphone with certificate A in the U.S. and certificate B in Europe. 

        - A hairdryer with certificate C in the U.S. and certificate D in Europe.
        
        How should a developer allow the merchant to display the appropriate certification logo in the product details page, 
        depending on the customer's location?`,
        option1: `Add an image custom preference to the SitePreference system object type.`,
        option2: `Add a localizable custom preference to the SitePreference system object type.`,
        option3: `Add a localizable custom attribute to the Certificate system object type.`,
        option4: `Add a Site-specific custom attribute to the Product system object type.`,
        answer: 4,
    },
    {
        questionNumber: 41,
        question: `
        A developer configures the dw.json file and needs to fill in the necessary parameters to complete the task.
        
        Which three parameters are required when using npm scripts?`,
        option1: `Hostname`,
        option2: `Site ID`,
        option3: `Code Version`,
        option4: `Username/Password`,
        option5: `CSRF Token`,
        option6: `B, C, and D are correct.`,
        option7: `A, C and D are correct.`,
        answer: 7,
    },
    {
        questionNumber: 42,
        question: `
        There are three logging categories: category1, category1.eu, and category1.us. 
        
        In Business Manager, category1 is enabled for WARN level and no other categories are configured. 
        All custom log targets are enabled. 
        
        The code segment below executes:
        
        var logger = Logger.getLogger('loggerFile','category1.eu');
        logger.warn('This is a log message');
        
        What is the result?`,
        option1: `Logs will be written to the log file with a prefix custom-loggerFile.`,
        option2: `Logs will not be written.`,
        option3: `Logs will be written to the log file with a prefix loggerFile.`,
        option4: `Logs will be written to the log file with a prefix customwarn.`,
        answer: 1,
    },  
    {
        questionNumber: 43,
        question: `
        A client has two B2C Commerce sites in the same instance: one for the U.S. market, the other for the European market. 
        
        They offer free gift wrapping on a selection of products. For each order, five products can be wrapped in the U.S., 
        but only three products can be wrapped in the European region.
        
        How should a developer allow the merchant to independently adjust this number?`,
        option1: `Create a new custom preference by extending the Site Preference object type.`,
        option2: `Select the corresponding option in the system preference for Orders.`,
        option3: `Add a new Campaign using the Online Marketing section of the Business Manager.`,
        option4: `Configure a new localizable content slot with a market-specific value.`,
        answer: 1,
    },  
    {
        questionNumber: 44,
        question: `
        A developer is tasked with the development of a new Page Designer Page Type, as requested by the merchant.
        
        How should they define the rendering logic of the page?`,
        option1: `Implement a Javascript file with a render() function.`,
        option2: `Implement an XML file with a <render> node.`,
        option3: `Implement a Controller file with a 'render' route.`,
        option4: `Implement a metadata JSON file with a 'render' property.`,
        answer: 1,
    },
     {
        questionNumber: 45,
        question: `
        A developer must configure permissions for an Open Commerce API resource 
        on a sandbox instance that currently does not have any permissions configured.
        
        Which two configuration properties are required to enabled access to the resource?`,
        option1: `read_attributes`,
        option2: `version_range`,
        option3: `client_id`,
        option4: `resource_id`,
        option5: `A and D are correct.`,
        option6: `C and D are correct.`,
        answer: 6,
    },     
    {
        questionNumber: 46,
        question: `
        The developer created a new Storefront category in storefront-catalog-m-en, 
        but when viewing the Storefront site, the category is not visible.
        
        What are two possible reasons?`,
        option1: `The category does not contain available products.`,
        option2: `The category is not sorted.`,
        option3: `The Storefront catalog is offline.`,
        option4: `The category is offline.`,
        option5: `A and D are correct.`,
        option6: `A and C are correct.`,
        answer: 5,
    },  
    {
        questionNumber: 47,
        question: `
        A developer is given the requirement to add a step to the existing business logic of the registration process.
        
        How should the developer modify the route that handles the customer registration?`,
        option1: `Override the route with new functionality.`,
        option2: `Extend the route with new functionality.`,
        option3: `Change the controller route with new functionality.`,
        option4: `Copy the code from the original route to a new controller route, and change it.`,
        answer: 2,
    },
     {
        questionNumber: 48,
        question: `
        Given the following conditions:
        
        - A site export file with a copy of the Storefront data for a custom site.
        - A sandbox with the custom site code, but no Storefront data.
        - A requirement for a working copy of SFRA for development reference.
        
        A developer is assigned three tasks to perform in Business Manager. 
        In what sequence should the developer perform the tasks, so that the custom site displays the products as intended?`,
        option1: `Import the SFRA Demo Sites using Site Import/Export`,
        option2: `Import the custom Site using Site Import/Export`,
        option3: `Rebuild the custom Site search indexes`,
        option4: `The correct sequence is: A, B and C`,
        option5: `The correct sequence is: B, C and A`,
        answer: 5,
    },     
    {
        questionNumber: 49,
        question: `
        Given the SFRA Controller below:
        
       01 var server = require('server');
       02 var cache = require('*/cartridge/scripts/middleware/cache');
       03 
       04 server.get('Show', cache.applyDefaultCache, function (req, res, next) {
       05     viewData = { name: 'myString' };
       06     res.render('pages/mypage', viewData);
       07     next();
       08 });
       09 
       10 module.exports = server.exports();
        
        Why would a Javascript debugger, that is stopped at line 06, 
        fail to show the viewData variable in the inspection tool?`,
        option1: `viewData is assigned but no declared.`,
        option2: `viewData is a B2C Script reserved name.`,
        option3: `cache.applyDefaultCache is not a valid middleware`,
        option4: `viewData is declared but not assigned`,
        answer: 1,
    },  
    {
        questionNumber: 50,
        question: `
        A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox.
        
        Which three items are required to accomplish this task?`,
        option1: `Instance Hostname`,
        option2: `Instance Version`,
        option3: `Keystore Password`,
        option4: `Business Manager Username`,
        option5: `Business Manager Password`,
        option6: `A, B and C are correct`,
        option7: `A, D and E are correct`,
        answer: 7,
    },
     {
        questionNumber: 51,
        question: `
        A developer needs to share their sandbox data with a colleague working on the same realm.
        
        What is the best practice to share data between two environments?`,
        option1: `Perform a site export using the global export directory`,
        option2: `Perform a site export and a local site import`,
        option3: `Perform a data replication from one sandbox to the order`,
        option4: `Perform a site export using the remote archive`,
        answer: 2,
    },     
    {
        questionNumber: 52,
        question: `
        A business user wants to add a link to a content page from within the body of another content asset. 
        
        The target content asset ID is: terms-and-conditions.
        
        Which link function generates the correct link?`,
        option1: `\$http('Content-Page','cid','terms-and-conditions')\$`,
        option2: `\$url('Page-Show','cid','terms-and-conditions')\$`,
        option3: `\$httpUrl('Content-Show','cid','terms-and-conditions')\$`,
        option4: `\$include('Page-Include','cid','terms-and-conditions')\$`,
        answer: 3,
    },  
    {
        questionNumber: 53,
        question: `
        Universal Containers recently completed updates to their storefront shopping cart page. 
        
        A problem has been discovered since the update. Users are no longer able to submit coupon codes on this page. 
        Additionally, authenticated users who try to add a coupon are logged out.
        
        The following processing code is found in the Cart.js controller file:
        
        function (formgroup) {
            var CSRFProtection = require('dw/web/CSRFProtection');
            
            if (!CSRFProtection.validateRequest()) {
                app.getModel('Customer').logout();
                app.getView().render('csrf/csrffailed');
                return null;
            }

            var result = {cart:cart, EnabledCheckout: true, dontRedirect: true};

            if (formgroup.couponCode.htmlValue) {
                var status = cart.addCoupon(formgroup.couponCode.htmlValue);
                // Update result with status of coupon
            } else {
                result.CouponError = 'COUPON_CODE_MISSING';
            }

            return result;
        };`,
        option1: `The form group has the secure attribute set to true.`,
        option2: `The CSFR settings in Business Manager are properly configured.`,
        option3: `The CSFR token is present in the form and is being submitted in the request.`,
        option4: `The CSFR cartridge is included in the site's cartridge path.`,
        answer: 3,
    },
     {
        questionNumber: 54,
        question: `
        Universal Containers sells physical gift cards for the holidays.
        
        What needs to occur to guarantee the cards will cards be available?`,
        option1: `Create an inventory record with a extremely high Allocation value (i.e., 1 billion certificates)`,
        option2: `Create an inventory record with Backorder Handling enabled.`,
        option3: `Create an inventory record with an unlimited Allocation value.`,
        option4: `Create a perpetual inventory record.`,
        answer: 2,
    },     
    {
        questionNumber: 55,
        question: `
        A Digital Developer is requesting product information for an external integration. 
        The following Open Commerce API (OCAPI) request is NOT functioning correctly:
        
        POST /dw/shop/v18_3/products/(creative-zen-v, namco-we-ski-wii)?client_id=aaaa...
        HTPP/1.1 Host: example.com
        
        How should the developer change the request?`,
        option1: `Include an authentication token in the request.`,
        option2: `Change the URI to /dw/shop/v18_13/products/creative-zen-v`,
        option3: `Change the HTTP method to GET`,
        option4: `Change the HTTP method to PUT`,
        answer: 3,
    },  
    {
        questionNumber: 56,
        question: `
        A Digital Developer suspects a logical error in a script.
        
        Which action will help locate the error?`,
        option1: `Print all values in the script node called before the current script.`,
        option2: `Check request logs for evidence of the logical error.`,
        option3: `Put breakpoints in the code, debug, and examine variable values.`,
        option4: `Submit a support ticket to B2C Commerce.`,
        answer: 3,
    },
     {
        questionNumber: 57,
        question: `
        Assume the code below is executing:
        
        var log = Logger.getLogger('xyz', 'export');
        log.info('This is important information');
        
        Business Manager has the configuration:
        
        - Active Log category is "root" with log level of "info".
        
        Given this information, what is the beginning of the filename in which the log will be written?`,
        option1: `custominfo-blade`,
        option2: `custom-export`,
        option3: `custom-xyz.`,
        option4: `xyz`,
        answer: 3,
    },     
    {
        questionNumber: 58,
        question: `
        Which two methods are efficient and scalable?`,
        option1: `ProductSearchHit.getRepresentedProducts()`,
        option2: `ProductSearchModel.getProductSearchHits()`,
        option3: `Category.getProducts()`,
        option4: `ProductMgr.queryAllSitesProducts()`,
        option5: `A and B are correct`,
        option6: `B and C are correct`,
        answer: 6,
    },  
    {
        questionNumber: 59,
        question: `
        A Digital Developer needs to add logging to the following code:
        
        var Logger = require('dw/system/Logger');
        
        var urlEmail = 'https://api.weibo.com/2/account/profile/email.json' + accessTokenSuffix;
        
        http.open('GET', urlEmail);
        http.send();
        
        var resultEmail = http.getText();
        
        if (200 !== http.statusCode) {
            // Log invalid status code
        }
        
        Which statement logs the HTTP status code to a debug-level custom log file?`,
        option1: `logger.getLogger('profile').debug('Error retrieving profile email, Status Code: ', http.statusCode);`,
        option2: `Logger.getLogger('profile').debug('Error retrieving profile email, Status Code: {0} was returned.',http.statusCode);`,
        option3: `Logger.getLogger().debug('Error retrieving profile email, Status Code: {0} was returned.', http.statusCode);`,
        option4: `Logger.debug('Error retrieving profile email, Status Code: {0} was returned.', http.statusCode);`,
        answer: 4,
    },
     {
        questionNumber: 60,
        question: `
        A developer needs to display a product list of their 'Women Dresses' category in a new web application, 
        independent of their main B2C Commerce site. 
        
        This custom listing page needs to be styled differently from the existing one, as per marketing requirements.
        
        Which B2C Commerce tool should the developer use to collect the necessary information?`,
        option1: `The existing category's endpoint to perform a REST call.`,
        option2: `The ProductSearch resource of the Shop OCAPI.`,
        option3: `The iframe of the existing category page.`,
        option4: `The Search-Show controller URL to perform a web crawl`,
        answer: 2,
    },     
    {
        questionNumber: 61,
        question: `
        Given the requirement to add caching to an existing page while adhering to SFRA best practices. 
        Which code snippet should be used?`,
        option1: `server.get('Show', function (req, res, next) {
            // Code
        }).applyDefaultCode();`,
        option2: `<iscache type="relative" hour="24"/>`,
        option3: `<iscache varyby="price_promotion" type="relative" status="on"/>`,
        option4: `server.get('Show', cache.applyDefaultCache, function (req, res, next) {
            // Code
        })`,
        answer: 4,
    },  
    {
        questionNumber: 62,
        question: `
        A merchant reports that a particular landing page loads slowly. As a result, 
        there is a significantly higher visitor departure rate in the analytics that appears to correlate with this. 
        They anticipate this will impact revenues and want to resolve as soon as possible.
        
        In order to diagnose and remedy this, the merchant asks their developer to investigate caching settings 
        on the page in an attempt to determine the root cause.
        
        How can the developer quickly inspect the page components to understand the caching?`,
        option1: `Utilize the debugger to inspect the caching information.`,
        option2: `Use the Storefront Toolkit cache info tool to inspect page components.`,
        option3: `Open the request log to inspect the caching information.`,
        option4: `Inspect the caching properties of the page component in an IDE.`,
        answer: 2,
    },
     {
        questionNumber: 63,
        question: `
        Consider the following information:
        
        - A merchant has this three-tier categories structure setup in the Storefront catalog: New Arrivals > Women > Clothing

        - The category named Clothing has all the clothing items for Women and is merchandised.
        
        - A search refinement named Newness is correctly configured for the clothing category.
        
        When a merchandiser views the Clothing category, the Search Refinement appears and works as expected. 
        However, the merchandiser does not see the Search Refinement when searching for Clothing via the Storefront search.
        
        What is the reason?`,
        option1: `There are conflicting Search Refinement defintions for Clothing and one of its parent categories.`,
        option2: `The Search Refinement definition is not set up for the New Arrivals category.`,
        option3: `The Search Refinement definition is not set up for the Women category.`,
        option4: `The Search Refinement definition is not set up for the root category.`,
        answer: 2,
    },  
    {
        questionNumber: 64,
        question: `
        A client uses tax tables in Business Manager to calculate tax. 
        They recently started shipping to a new country (Italy) 
        and the tax is not being calculated correctly on the Storefront.
        
        What is the likely problem?`,
        option1: `Tax Region is configured wrong`,
        option2: `Tax Jurisdiction is missing`,
        option3: `Tax Locale is configured wrong`,
        option4: `Tax Country is missing`,
        answer: 2,
    },
    {
        questionNumber: 65,
        question: `
        A Newsletter controller contains the following route:
        
        server.post('Subscribe', function (req, res, next) {
            var newsLetterForm = server.forms.getForm('newsletter');
            var CustomObjectMgr = require('dw/object/CustomObjectMgr');

            if (newsLetterForm.valid) {
                try {
                    var CustomObject = CustomObjectMgr.createCustomObject('NewsletterSubscription', newstetterForm.email.value);

                    CustomObject.custom.firstName = newsletterForm.fname.value;
                    CustomObject.custom.lastName = newsletterForm.lname.value;

                    res.render('/newsletter/newslettersuccess');
                } catch (e) {
                    // Catch error here 
                }
            }

            next();
      
        });
        
        Assuming the Custom Object metadata exists, why does this route fail to persist the data submitted in the form beyond the template render lifecycle?`,
        option1: `The CustomObjectMgr variable should be declared outside of the route.`,
        option2: `Custom Objects can only be created by Job scripts.`,
        option3: `The Subscribe route is missing the server.middleware.http.middleware`,
        option4: `The Custom Object creation is not wrapped in a Transaction.`,
        answer: 4,
    },  
    {
        questionNumber: 66,
        question: `
        Universal Containers requires that a new order comments attribute is added to the existing SiteGenesis checkout flow. 
        This new attribute needs to be included as part of the standard order export. 
        
        Aside from updating the HTML markup and form definition, which option contains all necessary steps to achieve this task?`,
        option1: `- Add the new attribute to the "Customer" system object.
        
        - Modify the "COPlaceOrder" controller to add this new attribute to the current session's "Customer" object.`,
        option2: `- Create a new custom object type for order comments that contains the attributes: order ID and comments.
        
        - Modify the "CoPlaceOrder" controller to create a new order comments custom object upon order completion.`,
        option3: `- Modify the "COPlaceOrder" controller to update a CSV file in the IMPEX WebDAV directory with the order ID and comments.
        
        - Modify the order export process to read information in the CSV file and include it as part of the export.`,
        option4: `- Add the new attribute to the "Order" system object.
        
        - Modify the "COPlaceOrder" controller to add this new attribute to the current session's "Order object."`,
        answer: 4,
    },
    {
        questionNumber: 67,
        question: `
        An instance has custom logging enabled. The log reaches the file size limit.
        
        What happens in this situation?`,
        option1: `The current log file is archived and a new log file is created.`,
        option2: `The log file rolls over and the oldest log messages are overwritten.`,
        option3: `The log file is deleted and a new log file is created.`,
        option4: `Logging is suspended for the day.`,
        answer: 4,
    },  
    {
        questionNumber: 68,
        question: `
        A digital developer is adding support for an additional language other than the default. 
        The locale code for the new language is de.
        
        In which folder should the developer place resource bundles?`,
        option1: `templates/de`,
        option2: `templates/default`,
        option3: `templates/default/resource`,
        option4: `templates/resource`,
        answer: 4,
    },
    {
        questionNumber: 69,
        question: `
        A digital developer is asked to optimize controller performance 
        by lazy loading scripts as needed of loading all scripts at the start of the code execution.
        
        Which statement should the Developer use to lazy load scripts?`,
        option1: `require () method`,
        option2: `local include`,
        option3: `\$.ajax () jQuery method`,
        option4: `importPackage () method`,
        answer: 1,
    },  
    {
        questionNumber: 70,
        question: `
        A digital developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. 
        There is already an existing Cart.js controller that handles processing of the other cart forms. 
        
        In addition, a form field node is in the form XML and the necessary form input is present in the ISML template. 
        
        The code below is the submit button for the ISML markup.
        
        <button type="submit" value="\${pdict.CurrentForms.cart.addRewardPass.htmlName}" name="\${pdict.CurrentForms.cart.addRewardPass.htmlName}">
            \${Resource.msg('rewards.apply', 'locale', null)}
        </button>
        
        What additional steps must occur before the Digital Developer can being writing the processing code for this request?`,
        option1: `- Add the attribute addtl-form-action="addRewardPass" to the ISML form.
        
        - Add the key addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller.`,
        option2: `- Add a <submit/> node to the form definition XML with the attribute formid="addRewardPass".
        
        - Add the they addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller.`,
        option3: `- Add an <action/> node to the form definition XML with the attribute formid="addRewardPass"
        
        - No change to Cart.js controller required.`,
        option4: `- Add an <action/> node to the form definition XML with the attribute formid="addRewardPass"
        
        - Add the key addRewardPass with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller.`,
        answer: 4,
    },
     {
        questionNumber: 71,
        question: `
        Given the requirements:
        
        - To integrate with an external web service using HTTP request.

        - To create a service for this purpose with the Service framework using the LocalServiceRegistry class.
        
        - To test the service before the external service provider makes the API available.
        
        Which solution allows the developer to satisfy the requirements?`,
        option1: `Create a service and implement the mockFull callback and a SitePreference to enable or disable the mock response.`,
        option2: `Create a service and a SitePreference that induce the service to respond with a mock response using a conditional.`,
        option3: `Create a service and implement the mockFull callback and set the service mode to mock.`,
        option4: `Create two services, one mock and the real one, and a SitePreference that enable the mock or the real one.`,
        answer: 3,
    },  
    {
        questionNumber: 72,
        question: `
        Given a file in a plug-in cartridge with the following code:
        
        'use strict;'
        
        var base = module.superModule;

        function applyCustomCache(req, res, next) {
            res.cachePeriod = 6;
            res.cachePeriodUnit = 'hours';
            next();
        }

        module.exports = base;
        module.exports.applyCustomCache = applyCustomCache;
        
        What does this code extend?`,
        option1: `A controller.`,
        option2: `A model.`,
        option3: `A middleware script.`,
        option4: `A decorator.`,
        answer: 3,
    },
    {
        questionNumber: 73,
        question: `
        The Home-Show route uses this middleware chain:
        
        server.get('Show', consentTracking.consent, cache.applyDefaultCache, function (req, res, next) {
            // based code here
        });
        
        The developer added Home.js in another cartridge, 
        which is before the original cartridge in the cartridge path, 
        to extend that route but it does not have the middleware chain:
        
        server.append('Show', function (req, res, next) {
            // custom code here
        });
        
        Assuming the code is correct on both functions, what is the expected result?`,
        option1: `The custom code executes and then the base code executes.`,
        option2: `A RunTime error is thrown, "Error: Params do not match route".`,
        option3: `The base code executes and then the custom code executes.`,
        option4: `The base code executes, but the custom code is ignored because the signature lines do not match.`,
        answer: 3,
    },  
    {
        questionNumber: 74,
        question: `
        Universal Containers wants to add a model field to each product. 
        Products will have locale-specific model values.
        
        How should the Digital Developer implement the requirement?`,
        option1: `Add model to a new custom object with localizable attributes.`,
        option2: `Stored translated model values in different fields; one field for each locale.`,
        option3: `Set the model field as a localizable attribute.`,
        option4: `Utilize resource bundles for translatable values.`,
        answer: 4,
    },
    {
        questionNumber: 75,
        question: `
        A Digital Developer adds the following line of code to a script:
        
        dw.system.Logger.getLogger('login').debug('Login API has succeeded');
        
        The code executes without error, however, the log file on disk does not contain the log message.
        
        Which two actions should be completed to write the log message to disk?`,
        option1: `Ensure that the debug log level is enabled to write to file in the Custom Log Setting Business Manager module.`,
        option2: `Ensure that the debug log level has been added to the custom log level types in the Global Preferences Business Manager module.`,
        option3: `Archive old log files to make room in the log directory.`,
        option4: `Ensure that the "login" category is added to the Custom Log Filters in the Log Settings Business Manager module.`,
        option5: `A and D are correct.`,
        option6: `A and B are correct.`,
        answer: 5,
    },  
    {
        questionNumber: 76,
        question: `
        A developer needs to update the package.json file so that it points to the hook file for a cartridge, 
        using the hooks keyword.
        
        Which snippets works correctly when added to the file?`,
        option1: `{"hooks":"./scripts/hooks.json"}`,
        option2: `{"hooks":"./cartridge/scripts/hooks.json"}`,
        option3: `{hooks:./scripts/hooks.json}`,
        option4: `{hooks:./cartridge/scripts/hooks.json}`,
        answer: 2,
    },
    {
        questionNumber: 77,
        question: `
        A Digital Developer noticed that cartridges in their workspace are not executing. 
        The Developer confirms that the cartridges are uploaded to the B2C Commerce server connection's target version directory.
        
        Which action potentially solves this problem?`,
        option1: `Set the active code version to use the latest compatibility mode.`,
        option2: `Remove invalid charecters from cartridge file and folder names.`,
        option3: `Remove invalid charecters from the code version's name.`,
        option4: `Set the server connection's target version directory to the active code version.`,
        answer: 4,
    },  
    {
        questionNumber: 78,
        question: `
        A digital developer added a file named MyBusinessController.js in the cartridge named app_project. 
        The project design calls for this new file to override MyBusinessController.js in client_project. 
        
        The client_project cartridge contains other necessary functionality. 
        Additional functionality is also included in the storefront_core and storefront_controller cartridges.
        
        Which cartridge path meets the project requirements?`,
        option1: `app_project:storefront_controllers:storefront_core`,
        option2: `app_project:client_project:storefront_controllers:storefront_core`,
        option3: `storefront_core:storefront_controllers:client_project:app_project`,
        option4: `client_project:app_project:storefront_controllers:storefront_core`,
        answer: 2,
    },
    {
        questionNumber: 79,
        question: `
        Given the customer basket described below:
        
        - A customer has an existing basket that consists of multiple items.
        - One of the items is identified as a gift item by an attribute at the product line item.
        
        The developer needs to write custom code to fetch the customer basket and then modify the basket based upon the items in the cart. 
        If the basket contains any gift items, modify the basket and create a separate shipment for the gift item.
        
        Four hooks are required to make the modification, beginning with modifyGETResponse and ending with validateBasket:
        
        1. dw.ocapi.shop.basket.modifyGETResponse
        2. -- missing hook --
        3. -- missing hook --
        4. dw.ocapi.shop.basket.validateBasket
        
        What are the two missing hooks on the middle?`,
        option1: `dw.ocapi.shop.basket.shipment.beforeDELETE`,
        option2: `dw.ocapi.shop.basket.shipment.afterDELETE`,
        option3: `dw.ocapi.shop.basket.shipment.beforePOST`,
        option4: `dw.ocapi.shop.basket.shipment.beforePATCH`,
        option5: `A and C are correct`,
        option6: `C and D are correct`,
        answer: 6,
    },  
    {
        questionNumber: 80,
        question: `
        A digital developer is working in a sandbox on a site named test-side using the domain test.demandware.net. 
        The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information.
        
        By default, which URL format is a proper Open Commerce API for sandbox?`,
        option1: `https://www.test.com/s/test-side/sfc/shop/products/M1355?client_id=aaa...`,
        option2: `https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa...`,
        option3: `https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...`,
        option4: `https://test.demandware.net/s/test-side/dw/shop/v18_3/products/M1355?client_id=aaa...`,
        answer: 4,
    },
    {
        questionNumber: 81,
        question: `
        A job executes a pipeline that makes calls to an external system.
        
        Which two actions prevent performance issues in this situation?`,
        option1: `Configure a timeout for the script pipelet.`,
        option2: `Use asynchronous import or export jobs.`,
        option3: `Use synchronous import or export jobs.`,
        option4: `Disable multi-threading.`,
        option5: `A and B are correct.`,
        option6: `A and C are correct.`,
        answer: 5,
    },  
    {
        questionNumber: 82,
        question: `
        A developer adds a file named Controller.js in the cartridge named app_custom_new_project. 
        The design calls for this new file to extend functionality from Controller.js in app_custom_brand_project. 
        
        The app_custom_brand_project and app_storefront_base cartridges include additional functionality that is required.
        
        Which cartridge path meets the project requirements?`,
        option1: `app_custom_new_project:app_custom_brand_project:app_storefront_base`,
        option2: `app_custom_new_project:app_storefront_base:app_custom_brand_project`,
        option3: `app_custom_brand_project:app_custom_new_project:app_storefront_base`,
        option4: `app_storefront_base:app_custom_brand_project:app_custom_new_project`,
        answer: 1,
    },
    {
        questionNumber: 83,
        question: `
        A developer uses the call() instance method of dw.svc.Service to invoke 
        a web service and implemented the callback methods defined by the dw.svc.ServiceCallBack class.
        
        Which callback method is required only when invoking a SOAP service?`,
        option1: `createRequest`,
        option2: `mockCall`,
        option3: `initServiceClient`,
        option4: `parseResponse`,
        answer: 3,
    },  
    {
        questionNumber: 84,
        question: `
        The following code performs poorly in the storefront:
        
        var productHits = 
        dw.catalog.ProductSearchModel.getProductSearchHits().getRepresentedProducts();
        
        var results = null;
        
        for (var i = 0; i &lt&; productHits.length; i++) {
            var variations = null;

            if (productHits[i].isMaster()) {

                variations = productHits[i].getVariationModel().getVariants();

                for (var j = 0; variations.length; i++) {

                    if (variations[j].getAvailabilityModel().isOrderable()) {
                        results.add(variations[j]);
                    }
                }

            } else {
                results.add(productHits[i]);
            }
        }
        
        Considering best practices, what is the main problem with this code?`,
        option1: `The code invokes dw.catalog.ProductSearchModel directly. It is more efficient to use the following code and then invoke the method:
        
        var ProductSearchModel = require('dw.catalog.ProductSearchModel');`,
        option2: `The code performs post-query processing in an inefficient manner. 
        The nested for-loops should be change  to more efficient code.`,
        option3: `The code performs post-query processing, which is inefficient and should be avoided.`,
        option4: `The code uses ProductSearchModel, which performs a database search.`,
        answer: 2,
    },
    {
        questionNumber: 85,
        question: `
        A digital developer has detected storefront pages being rendered with an error message. 
        After inspecting the log files, the developer discovered that an enforced quota is being exceeded.
        
        What action should the developer take to stop the quota violation?`,
        option1: `Rewrite the code that is causing the overage.`,
        option2: `Change the Business Manager configuration for the quota settings.`,
        option3: `Take no action, the overage will be resolved when concurrent visitors are reduced.`,
        option4: `Ask support to remove the quota limit.`,
        answer: 1,
    },  
    {
        questionNumber: 86,
        question: `
        A digital developer is working on a multi-site realm. 
        A new site requires a different layout for the account landing page. 
        The business logic and data model remain the same. 
        The existing code is in AccountControl.js and accountlanding.isml in the app_storefront cartridge. 
        
        The app_storefront cartridge contains code for all other business functions. 
        The cartridge path for the new site is currvently: 
        
        - int_cybersource:int_paypal:app_storefront.
        
        The developer creates a new cartridge named app_newsite that contains only the accountlanding.isml template 
        for the new site.
        
        Which modification should be made to the new cartridge path?`,
        option1: `Set the cartridge path so that app_storefront is before int_cybersource.`,
        option2: `Set the cartridge path to include only app_newsite.`,
        option3: `Set the cartridge path so that app_newsite is after app_storefront.`,
        option4: `Set the cartridge path so that app_newsite is before app_storefront.`,
        answer: 4,
    },
    {
        questionNumber: 87,
        question: `
        A developer is asked to write a log containing the ID and name of the product with a variable named myProduct.
        
        Which snippet of code should be used?`,
        option1: `Logger.warn('The current product is %s with name %s').context(myProduct.getID(), myProduct.getName());`,
        option2: `Logger.warn('The current product is \${myProduct.getID()} with name \${myProduct.getName()}');`,
        option3: `Logger.warn('The current product is {0} with name {1}').context(myProduct.getID(), myProduct.getName());`,
        option4: `Logger.warn('The current product is {0} with name {1}', myProduct.getID(), myProduct.getName());`,
        answer: 4,
    },  
    {
        questionNumber: 88,
        question: `
        Once the Cache Information tool of the storefront toolkit is enabled, 
        how can a Digital Developer view caching information for a particular component of the page?`,
        option1: `Hover over the caching icons now present on the storefront.`,
        option2: `Open the Request Logs to view the caching information.`,
        option3: `Start a pipeline debugging session and view the caching information provided.`,
        option4: `Right click on the component in UX Studio and view the caching properties of the file.`,
        answer: 1,
    },
    {
        questionNumber: 89,
        question: `
        A developer is asked to improve the maintainability of a page by reducing its code repetition.
        
        What are two techniques the developer should implement to achieve this?`,
        option1: `Require and render templates with <isscript> tags.`,
        option2: `Use local templates includes.`,
        option3: `Implement template decorators paired with replace.`,
        option4: `Embed partial files using ISML expressions.`,
        option5: `B and C are correct.`,
        option6: `C and D are correct.`,
        answer: 5,
    },  
    {
        questionNumber: 90,
        question: `
        A digital developer is inspecting the weekly service status report 
        for a critical internally-hosted web service used in the application 
        and notices that three are too many instances of unavailability.
        
        Which two solutions are possible options to reduce the unavailability of the service?`,
        option1: `Modify the code that makes the request to the external service to be wrapped in a try / catch block.`,
        option2: `Change the code that makes the request to set the throwOnError attribute, of the service, to be true.`,
        option3: `Increase the web service time out.`,
        option4: `Update the external service to have a faster response time.`,
        option5: `A and B are correct.`,
        option6: `C and D are correct.`,
        answer: 6,
    },
    {
        questionNumber: 91,
        question: `
        A digital developer needs to check for product inventory 
        in a specific inventory the Open Commerce API. An example request URL is:
        
        htpp://sitegenesis.demandware.net/dw/data/v18_3/inventory_lists/ecom-inventory/product_inventory_records/008883408601
        
        Which resource_id value enables the appropriate resource?`,
        option1: `/inventory_lists/*`,
        option2: `/products/*`,
        option3: `/inventory_lists/**`,
        option4: `/inventory_list_search`,
        answer: 3,
    },  
    {
        questionNumber: 92,
        question: `
        A merchant has a requirement to render personalized content on a 
        category page via a Content Slot that targets VIP high-spending customers 
        during a specific promotional period.
        
        Which two items should the developer create to achieve the specified requirements?`,
        option1: `Page Template`,
        option2: `Rendering Template`,
        option3: `Slot Configuration`,
        option4: `VIP Customer Group`,
        option5: `C and D are correct.`,
        option6: `B and C are correct.`,
        answer: 5,
    },
    {
        questionNumber: 93,
        question: `
        Universal Containers wants to associate a region code value 
        with an order to indicate the general area of its destination. 
        This region code must be accessible whenever the order history is displayed.
        
        What is required to accomplish this?`,
        option1: `Store the region code value in the geolocation system attribute of the Order.`,
        option2: `Store the region code value in a session variable.`,
        option3: `Define a custom attribute on the Order system object type to store the region code value.`,
        option4: `Define a custom object type to store the username with the region code.`,
        answer: 3,
    },  
    {
        questionNumber: 94,
        question: `
        A digital developer extends a system object (Product) and adds a boolean attribute "sellable" to it. 
        Assuming "prod" is the variable name handling the product. 
        
        What code can the developer use to access it?`,
        option1: `prod.sellable`,
        option2: `prod.persistable.sellable`,
        option3: `prod.custom.sellable`,
        option4: `prod.extended.sellable`,
        answer: 3,
    },
    {
        questionNumber: 95,
        question: `
        Universal Containers created a site export file from staging in the global export directory.
        
        How should the digital developer update their sandbox using this staging site export file?`,
        option1: `Use the Site Development > Site Import & Export Business Manager module.`,
        option2: `Perform a data replication from staging`,
        option3: `Download the site export file and use UX Studio to transfer the data to the sandbox.`,
        option4: `Use the Site Development > Import & Export Business Manager module.`,
        answer: 1,
    },  
    {
        questionNumber: 96,
        question: `
        A retailer notices that the Account Addresses page is showing the wrong shopper's address.
        
        Which tool should the developer start with to identify the issue?`,
        option1: `Code Profiler.`,
        option2: `Reports and Dashboards module.`,
        option3: `Pipeline Profiler.`,
        option4: `Storefront Toolkit.`,
        answer: 4,
    },  
    {
        questionNumber: 97,
        question: `
        Why should a digital developer use ProductSearchModel.getProducts() 
        instead of Category.getOnlineProducts() to access products?`,
        option1: `It uses the search index.`,
        option2: `It has fewer lines of code.`,
        option3: `It is more readable code.`,
        option4: `It reduces accesses to the application server.`,
        answer: 1,
    },  
    {
        questionNumber: 98,
        question: `
        Which three techniques improve client-side performance 
        in production while following documented best practices?`,
        option1: `Place CSS outside of templates.`,
        option2: `Compress CSS.`,
        option3: `Use one style sheet for each ISML decorator template.`,
        option4: `Use inline Javascript.`,
        option5: `Combine several images into a single image.`,
        option6: `A, B, E are correct.`,
        option7: `B, C and D are correct.`,
        answer: 7,
    },  
    {
        questionNumber: 99,
        question: `
        Given a template rendered by a controller with caching and a remote include without caching.
        
        Which situations applies?`,
        option1: `The page is cached only for returning customers because of the remote include.`,
        option2: `The page is not cached because the remote include introduces an uncached portion.`,
        option3: `Both the remote include portion and the rest of the page are cached.`,
        option4: `The remote included portion is not cached, but the rest of the page is cached.`,
        answer: 4,
    },  
    {
        questionNumber: 100,
        question: `
        Universal Containers needs to have Apple Pay disabled for the country of Spain.
        
        Which Business Manager module should the developer use to meet this requirement?`,
        option1: `Merchant Tools > Site Preferences > Apple Pay`,
        option2: `Merchant Tools > Ordering > Payment Methods`,
        option3: `Merchant Tools > Ordering > Payment Processors`,
        option4: `Merchant Tools > Site Preferences > Payment Types`,
        answer: 2,
    },  
    {
        questionNumber: 101,
        question: `
        Given a B2C Commerce client with these specifics:
        
        - Sells in two different countries: US and IN.
        - Uses only the English language.
        
        A developer has a requirement to add a new field 
        to the IN registration form that must not appear in the US one.
        
        Which path should be created to accomplish this requirement?`,
        option1: `cartridge/forms/in/profile.xml`,
        option2: `cartridge/forms/profile_en_IN_xml`,
        option3: `cartridge/forms/en_IN/profile.xml`,
        option4: `cartridge/forms/profile_in.xml`,
        answer: 3,
    },  
    {
        questionNumber: 102,
        question: `
        A digital developer has been given a requirement to add fault tolerance to an existing web service integration 
        that uses Service Framework. 
        
        Administrators at Universal Containers need to be able to configure the timeout and rate limiting.
        
        Which approach should the developer use to implement the requirement?`,
        option1: `Create a site preference to store timeout settings and implement an IOException handler to execute fallback code.`,
        option2: `Implement a ServiceUnavailableException exception handler to execute fallback code.`,
        option3: `Implement a condition that checks to see if the response was empty and execute fallback code if true.`,
        option4: `Use the setTimeout method to execute fallback code if the request has NOT completed.`,
        answer: 2,
    },  
    {
        questionNumber: 103,
        question: `
        Universal Containers has expanded its implementation to support German with a locale code of de. 
        
        The current resource bundle is checkout.properties. 
        To which file should the developer add German string values?`,
        option1: `de_checkout.properties in resources folder.`,
        option2: `checkout.properties in the default locale folder`,
        option3: `checkout_de.properties in resources folder.`,
        option4: `checkout.properties in the de locale folder.`,
        answer: 3,
    },  
    {
        questionNumber: 104,
        question: `
        Which three configurations does a developer need to ensure to have a new product visible in the Storefront?`,
        option1: `The product is online and searchable.`,
        option2: `The product has a price.`,
        option3: `The product has a master product.`,
        option4: `The search index is built.`,
        option5: `The Storefront catalog that contains the product is assigned to a site.`,
        option6: `A, D, E are correct.`,
        option7: `A, B, D are correct.`,
        answer: 6,
    },  
    {
        questionNumber: 105,
        question: `
        Which method is efficient and scalable because it uses the product search index rather than searching the database?`,
        option1: `ProductVariationModel.getVariants()`,
        option2: `ProductSearchModel().getProductSearchHits()`,
        option3: `ProductIndexModel.getOrderableProductsOnly()`,
        option4: `ProductAvailabilityModel.isOrderable()`,
        answer: 2,
    },  
    {
        questionNumber: 106,
        question: `
        A Universal Containers specifies a new category hierarchy 
        for navigation the digital commerce storefront. 
        
        A digital developer uses Business Manager to manually create 
        a catalog with the specified category hierarchy, 
        then uses the Product & Catalogs > Import & Export module to export the catalog as a file.
        
        How can other developers with sandboxes on the same realm create the same catalog in their own sandboxes?`,
        option1: `Use the import capability of the Site Import & Export module of Business Manager`,
        option2: `Use Business Manager to upload and import a copy of the export file obtained from the original developer.`,
        option3: `Use the remote upload capability of the Site Import & Export module of Business Manager.`,
        option4: `Use the Business Manager Data Replication module to replicate the catalog from the original Developer's sandbox.`,
        answer: 2,
    },  
    {
        questionNumber: 107,
        question: `
        A digital developer must give users the ability to choose an occasion (holiday, birthday, anniversary, etc.) 
        for which gifts are currently being selected. The data needs to be persistent throughout the current shopping experience.
        
        Which data store variable is appropriate, assuming there is no need to store the selection in any system or custom objects?`,
        option1: `Session scope variable.`,
        option2: `Page scope variable.`,
        option3: `Request scope variable.`,
        option4: `Content slot variable.`,
        answer: 1,
    },  
    {
        questionNumber: 108,
        question: `
        A digital developer selects "Show Orderable Products Only" in the Search > Search Preferences Business Manager module.
        
        Which business goal does this accomplish?`,
        option1: `Exclude pre-order products from search results.`,
        option2: `Block displaying the product detail page if Available to Sell (ATS) = 0.`,
        option3: `Exclude back-ordered products from showing on the website.`,
        option4: `Exclude products from search results if Available to Sell (ATS) = 0.`,
        answer: 4,
    },  
    {
        questionNumber: 109,
        question: `
        Given the following configuration in the Administration > Sites > Manage Sites Business Manager module:
        
        - ID: RefArch
        - Name: RefArch
        - TimeZone: Etc/UTC
        - Default Currency: US Dollar
        - Taxation: Net
        - Customer List: RefArch
        
        What must be done for RefArch to use the same customer list as a RefArchGlobal?`,
        option1: `Select RefArchGlobal in the dropdown for Customer List.`,
        option2: `Enable "Customer List Sharing" in Global Preferences.`,
        option3: `Import the RefArchGlobal customer list into the RefArch site.`,
        option4: `Enable "Customer List Sharing" in Site Preferences.`,
        answer: 1,
    },  
    {
        questionNumber: 110,
        question: `
        Below is a form definition snippet from the newsletter.xml file:
        
        <?xml version="1.0"?>
        <form xmlns="http://www.demandware.com/xml/form/2008-04-19">
            <field formid="email" label="Email:" type:"string" mandatory="true" max-length="50"/>
        </form>
        
        Which line of code creates a JSON object to contain the form data?`,
        option1: `server.form.getForm('newsletter')`,
        option2: `server.forms.getForm('newsletter');`,
        option3: `server.form.getForm('dwfrm_newsletter')`,
        option4: `server.forms.getForm('dwfrm_newsletter')`,
        answer: 2,
    },  
    {
        questionNumber: 111,
        question: `
        Which three object types can a developer import using 
        the Merchant Tools > Content > Import & Export module in Business Manager?`,
        option1: `Content Slots`,
        option2: `Products`,
        option3: `Folders`,
        option4: `Content Assets`,
        option5: `Images and other static assets`,
        option6: `A, D and E are correct.`,
        option7: `A, C, D are correct.`,
        answer: 7,
    },  
    {
        questionNumber: 112,
        question: `
        A digital developer needs to store information temporarily and decides to create a custom object.
        
        Which code creates a custom object?`,
        option1: `CustomObject.createCustomObject(primaryKey, CustomObjectType);`,
        option2: `CustomObject.createCustomObject(CustomObjectType, primaryKey);`,
        option3: `CustomObjectMgr.createCustomObject(CustomObjectType, primaryKey);`,
        option4: `CustomObjectMgr.createCustomObject(primaryKey);`,
        answer: 3,
    },  
    {
        questionNumber: 113,
        question: `
        A developer is given a task to implement a new Page Designer layout component 
        that doesn't accept certain asset components.
        
        How should the developer achieve the above task?`,
        option1: `Add layout_type_exclusion in the order asset components json configuration.`,
        option2: `Add layout_type_inclusion in the target components json configurations.`,
        option3: `Add component_type_inclusion in the layout json configuration.`,
        option4: `Add component_type_exclusions in the layout json configuration.`,
        answer: 4,
    },  
    {
        questionNumber: 114,
        question: `
        A developer working on a multi-country site is asked to store country-specific data 
        that drives the creation of a country selector. 
        
        Examples of the data store are:
        
        - Pricebook to be used.
        - Image URL for country flag.
        
        The data used in staging also applies in production, but not only for this site.
        
        Which approach should the developer take to implement these requirements?`,
        option1: `Extend the Locale System Object to contain the custom data for each country.`,
        option2: `Create site-specific content assets to store the data for each country.`,
        option3: `Create a replicable, organization scope Custom Object with the custom data for each country.`,
        option4: `Create a replicable, site-specific Custom Object with the custom data for each country.`,
        answer: 4,
    },  
    {
        questionNumber: 115,
        question: `
        The following code ensures that an address ID cannot be used if it is already in use 
        by another address in the customer's address book. There is a problem with the code. The error message 
        for an invalid address ID is never shown to the user on the form field.
        
        if (address.ID !== addressForm.addressid.value) {
            for (var i = 0; i < addressBook.addresses.length; i++) {
                if (addressBook.addresses[i].ID === addressForm.addressid.value) {
                    addressForm.invalidateFormElement();
                    throw new Error('Address name already exists'); 
                }
            }
        }
        
        How should the digital developer resolve this issue so that the error message is displayed 
        on the address ID form field?`,
        option1: `addressForm.invalidateFormElement(addressForm.addressid);`,
        option2: `addressForm.invalidateFormElement('addressid');`,
        option3: `addressForm.addressid.invalidateFormElement();`,
        option4: `addressForm.addressid.invalidateFormElement = true;`,
        answer: 3,
    },  
    {
        questionNumber: 116,
        question: `
        A digital developer has a new requirement to disable the "Discover" credit card type for all checkouts.
        
        What does the Developer need to change in Business Manager to fulfill this requirement?`,
        option1: `Credit card exclusion rules in the Merchant Tools > Site Preferences > Payment Preferences module.`,
        option2: `Checkout exclusion rules in the Merchant Tools > Site Preferences > Checkout Preferences module.`,
        option3: `Credit cards in the Merchant Tools > Ordering > Payment Methods module.`,
        option4: `Credit card exclusion rules in the CreditCardType.json configuration file.`,
        answer: 3,
    },  
    {
        questionNumber: 117,
        question: `
        Business Manager has the configuration:
        
        - Active Log category is "root".
        - Log level of INFO.
        
        The code below executes:
        
        var log = Logger.getLogger("products", "export");
        log.info("This is important information");
        
        Using this information, what is the beginning of the filename in which the log will be written?`,
        option1: `products`,
        option2: `custom-export`,
        option3: `info-export`,
        option4: `custom-products`,
        answer: 3,
    },  
    {
        questionNumber: 118,
        question: `
        A digital developer has been given a specification to integrate with a REST API for retrieving weather conditions. 
        The service expects parameters to be form encoded.
        
        Which service type should the developer register?`,
        option1: `SOAP`,
        option2: `HTTP Form`,
        option3: `FTP`,
        option4: `WebDav`,
        answer: 2,
    },  
    {
        questionNumber: 119,
        question: `
        A client sells its product in single-brand stores as well as multi-brand stores. 
        When shown in the store locator list, the client wants the single-brand stores 
        to have a particular background color to highlight them.
        
        Which Business Manager action should be completed to allow the developer 
        to apply different styling to the single-brand stores?`,
        option1: `Adjust the relevant Site Preferences in the Store group.`,
        option2: `Add a boolean custom attribute to the Store system object.`,
        option3: `Configure the existing Store custom object type definition.`,
        option4: `Create a new SingleBrandStore custom object configuration.`,
        answer: 2,
    },  
    {
        questionNumber: 120,
        question: `
        A client that sells to multiple countries in Europe needs to disable Apple Pay for Denmark.
        
        Which Business Manager module is used to achieve this requirement?`,
        option1: `Locale Payments`,
        option2: `Apple Pay`,
        option3: `Payment Processors`,
        option4: `Payment Methods`,
        answer: 4,
    },  
    {
        questionNumber: 121,
        question: `
        A digital developer creates a B2C Commerce server connection in their UX Studio workspace. 
        The developer adds new cartridges to the workspaces, but the cartridges do not execute 
        as the developer expects.
        
        Which three things should the digital developer verify to ensure the cartridges are uploaded?`,
        option1: `The cartridge is for the current version of B2C Commerce.`,
        option2: `The Active Server setting is enabled for the server connection.`,
        option3: `The server is configured to accept incoming connections.`,
        option4: `The Auto-Upload setting is enabled for the server connection.`,
        option5: `The credentials for the server connection are correctly entered.`,
        option6: `A, D, E are correct.`,
        option7: `B, D, E are correct.`,
        answer: 7,
    },  
    {
        questionNumber: 122,
        question: `
        In Log Center, a developer notes a number of Cross Site Request Forgery (CSRF) log entries. 
        The developer knows that this happens when a CSFR token is either not found or is invalid, 
        and is working to remedy the situation as soon as possible.
        
        Which two courses of action might solve the problem?`,
        option1: `Add the token in the ISML template.`,
        option2: `Add csrfProtection.generateToken as a middleware step in the controller.`,
        option3: `Delete the existing CSFR whitelists Business Manager.`,
        option4: `Extend the CSFR token validity to avoid timeouts.`,
        option5: `A and B correct.`,
        option6: `B and C are correct.`,
        answer: 5,
    },  
    {
        questionNumber: 123,
        question: `
        A NewsletterSubscription custom object exists that has a key attribute named email 
        of type String and the following script code:
        
        var CustomObject = dw.object.CustomObjectMgr.createCustomObject('NewsletterSubscription', newsletterForm.email.value);
        
        However, the NewsletterSubscription custom object is not persisted.
        
        What is a possible reason?`,
        option1: `The code shown needs to be wrapped in a try / catch block.`,
        option2: `The code shown is the wrong syntax. The correct syntax is:
        
        var CustomObject = dw.object.CustomObjectMgr.createCustomObject(newsletterForm.email.value 'NewsletterSubscription');`,
        option3: `The code shown needs to be wrapped in a transaction.`,
        option4: `The code shown is the wrong syntax. The correct syntax is:
        
        var CustomObject = dw.object.CustomObjectMgr.createCustomObject('NewsletterSubscription' 'email' newsletterForm.email.value);`,
        answer: 3,
    },  
    {
        questionNumber: 124,
        question: `
        Which line of code creates a content slot that can be included on homepage.isml to display on the home page?`,
        option1: `<isslot id="my_banner" description="for home page" type="global" context="homepage"/>`,
        option2: `<isslot id="my_banner" description="for home page" context="global" context-global="\${pdict.CurrentHomePage}"/>`,
        option3: `<isslot id="my_banner" description="for home page" type="global" context="content" context-object="\${pdict.ContentSearchResult.content}"/>`,
        option4: `<isslot id="my_banner" description="for home page" context="global"/>`,
        answer: 4,
    },  
    {
        questionNumber: 125,
        question: `
        A digital developer must resolve a performance issue with product tiles. 
        The developer determines that the product tiles are not being cached for a long enough period.
        
        Which two methods can the developer use to verify the cache settings for the product tiles?`,
        option1: `View the cache information provided by the Merchant Tools > Technical Reports Business Manager module.`,
        option2: `Enable the template debugger to verify the cache times for the producttile.isml template.`,
        option3: `View the product list page cache settings provided in the Administration > Manage Sites Business Manager module.`,
        option4: `Enable cache information in the storefront toolkit and view the cache information for the product tile.`,
        option5: `C and D are correct.`,
        option6: `A and C are correct.`,
        answer: 5,
    },  
    {
        questionNumber: 126,
        question: `
        A digital developer wants to selectively retrieve products and process them from an iPhone.
        
        Which action should the developer take, given that Javascript controllers cannot be used?`,
        option1: `Use WebDav Client to retrieve products.`,
        option2: `Create a webservice to retrieve products.`,
        option3: `Use import/export in Business Manager.`,
        option4: `Use OCAPI and invoke it in native language.`,
        answer: 4,
    },  
    {
        questionNumber: 127,
        question: `
        A merchant has a new requirement to accept American Express credit cards on its Storefront. 
        A credit card payment method already exists.
        
        Which steps must a developer take in Business Manager to achieve this?`,
        option1: `In Payment Methods, enable the American Express as a credit card type.`,
        option2: `In Payment Processor, create American Express as a payment type.`,
        option3: `Add American Express as a Payment Preference in Site Preferences.`,
        option4: `Add American Express into the Order setting in Site Preferences.`,
        answer: 1,
    },  
    {
        questionNumber: 128,
        question: `
        A Storefront is designed so that multiple pages share a common header and footer layout.
        
        Which ISML tag should a developer use on the templates for these pages to avoid code repetition 
        in the most effective way?`,
        option1: `<iscontent>...</iscontent>`,
        option2: `<isinclude>...</isinclude>`,
        option3: `<isreplace>...</isreplace>`,
        option4: `<isdecorate>...</isdecorate>`,
        answer: 4,
    },  
    {
        questionNumber: 129,
        question: `
        A digital developer is implementing an Open Commerce API call to add products to a basket. 
        Given the following resource configuration:
        
        {
            "resource_id": "/baskets/**",
            "methods": ["get"],
            "read_attributes": "(**)",
            "write_attributes": "(**)"
        }
        
        Which modification allows the requests to successfully execute?`,
        option1: `Change the "resouce_id" value to: "/baskets/*/items"`,
        option2: `Change the "read_attributes" value to: "(items)"`,
        option3: `Change the "methods" value to: ["get", "post"]`,
        option4: `Change the "write_attributes" value to: "(+items)"`,
        answer: 3,
    },  
    {
        questionNumber: 130,
        question: `
        A digital developer has a site export file on their computer that needs to be imported into their sandbox.
        
        How should the developer update their sandbox with the data in this file?`,
        option1: `Upload and import the file using the local option within the Site Import & Export Business Manager module.`,
        option2: `Connect and import the file using the remote option within the Site Import & Export Business Manager module.`,
        option3: `Upload the file to the Impex WebDAV directory and import using the Site Import tool within UX Studio.`,
        option4: `Upload the file to the Static WebDAV directory and import using the Import & Export Business Manager module.`,
        answer: 1,
    }, 
    {
        questionNumber: 131,
        question: `
        Universal Containers wants to give customers the ability to refine product search results 
        by a product custom attribute, weightCapacity.
        
        Which series of steps should a digital developer take to show this refinement on the storefront?`,
        option1: `Define a search refinement for weightCapacity, then clear the page cache segment for Search-Show.`,
        option2: `Define search-suggestion buckets for weightCapacity, then rebuild the product search index.`,
        option3: `Define a sorting rule for weightCapacity, then rebuild the product search index.`,
        option4: `Define a search refinement for weightCapacity, then rebuild the product search index.`,
        answer: 4,
    },  
    {
        questionNumber: 132,
        question: `
        What happens if the log size limit is reached in custom logging?`,
        option1: `Logging is suspended for the day.`,
        option2: `Logging is suspended for two hours.`,
        option3: `The log file is deleted and recreated from scratch.`,
        option4: `The log file rolls over and the last used log is overwritten.`,
        answer: 1,
    }, 
    {
        questionNumber: 133,
        question: `
        A digital instance has one site with one master product catalog separate from the site catalog. 
        Some but not all products in the master catalog are assigned to categories of the site catalog.
        
        Using Business Manager, how can a digital developer create a catalog export file that contains 
        only the products assigned to the site catalog?`,
        option1: `Use the Catalog Export module to export the master catalog with a category-assigment search to export specific products.`,
        option2: `Use the Catalog Export module to export the site catalog.`,
        option3: `Use the Site Import & Export module to export the master catalog, filtered by site catalog categories to export specific products.`,
        option4: `Use the Site Import & Export module to export both the site catalog and the master catalog in a single archive.`,
        answer: 2,
    },  
    {
        questionNumber: 134,
        question: `
        When exporting a site catalog from an external system, which file format or formats should a developer use 
        so it can be imported into a B2C Commerce site?`,
        option1: `XML only`,
        option2: `XML and JSON`,
        option3: `CSV only`,
        option4: `JSON only`,
        answer: 1,
    }, 
    {
        questionNumber: 135,
        question: `
        A developer is writing a server side script that needs to maintain state across calls. 
        
        The persistent information needed includes these items:
        
        - The current customer.
        - Whether or not the customer is authenticated.
        - The privacy attributes (such as tracking consent or cookie policy).
        
        Which technique should the developer use to maintain state in an efficient 
        and scalable manner that follows best practice?`,
        option1: `Use a SFRA controller. Because it runs server-side, the state is automatically maintained.`,
        option2: `Use the Session class and its additional class references and attributes in the B2C Commerce API.`,
        option3: `Use a client-side cookie to store the information for the session duration.`,
        option4: `Use a non-replicable Custom Object to store the information temporarily`,
        answer: 2,
    },  
    {
        questionNumber: 136,
        question: `
        Universal Containers is preparing their storefront to use Open Commerce APIs (OCAPI).
        
        To which hook should the digital developer move taxation logic 
        to ensure consistent order totals within B2C Commerce?`,
        option1: `dw.ocapi.shop.order.vaidateOrder`,
        option2: `dw.ocapi.shop.basket.afterPostShipment`,
        option3: `dw.ocapi.shop.order.afterPOST`,
        option4: `dw.ocapi.shop.basket.calculate`,
        answer: 4,
    }, 
    {
        questionNumber: 137,
        question: `
        Which technical reports datapoint measures the performance of a controller's script execution 
        if network factors and Web Adaptor processing is ignored?`,
        option1: `Processing time.`,
        option2: `Response time.`,
        option3: `Call count.`,
        option4: `Cache hit ratio.`,
        answer: 1,
    },  
    {
        questionNumber: 138,
        question: `
        Universal Containers calls the following combination of products "The Basics" 
        and sells the combination as a unique product ID:
        
        - One Model 103 container.
        - Five Model 611 container.
        - Tree Model 201 container.
        
        The developer created these three products in the catalog.
        
        What is the next step in Business Manager to create "The Basics" as a combination?`,
        option1: `In the Product Sets module, create a product set named "The Basics".`,
        option2: `In the Products module, create a product named "The Basics" and add the products to the Product Sets tab.`,
        option3: `In the Product Bundles module, create a bundle named "The Basics".`,
        option4: `In the Products module, created a product name "The Basics" and add the products to the Product Bundles tab.`,
        answer: 4,
    }, 
    {
        questionNumber: 139,
        question: `
        What is the correct syntax to define hooks in package.json file in order to configure functionality 
        to be called at a specific point in your application flow or at a specific event?`,
        option1: ` {"hooks": "./cartridge/scripts/hooks.json"}`,
        option2: `{"hooks": {"name":"dw.ocapi.shop.basket.calculate","script":"./hooks"}}`,
        option3: `A and B are both correct.`,
        option4: `You can't define hooks. This functionality cannot be extended and its purpose it's just for OCAPI.`,
        answer: 1,
    },
    {
        questionNumber: 140,
        question: `
        How would you make a variable be persistent during multiple pages for your current Site?`,
        option1: `<isset name="var" scope="session"...`,
        option2: ` <isset name="var" scope="request"...`,
        option3: `<isset name="var" scope="page"...`,
        option4: `<isset name="var" scope="site"...`,
        answer: 1,
    },
    {
        questionNumber: 141,
        question: `
        What would be the expected cache policy for a page that is rendered by another page 
        where its controller has defined cache.applyDefaultCache in his middleware chain? 
        
        Choose all correct answers that apply.`,
        option1: `Same cache would be applied`,
        option2: `If this page is rendered by another controller with another cache configuration it would overwrite the previous one.`,
        option3: `If this page is included using <isinclude url=""... /> no cache would be applied.`,
        option4: `It won't be cached.`,
        option5: `A and C are correct.`,
        answer: 2,
    },
    {
        questionNumber: 142,
        question: `
        Cache for stored pages are only invalidated and a new one pulled from the Application Server when:`,
        option1: `The defined caching time is exceeded or a replication is performed.`,
        option2: `The merchant triggers an explicit page cache invalidation in Business Manager.`,
        option3: `The administrator modifies TTL value to 0 in Administration > Sites > Manage Sites > Cache`,
        option4: `A and B are correct.`,
        answer: 4,
    },
    {
        questionNumber: 143,
        question: `
        What happens if the log size limit is reached?`,
        option1: `An email is sent to the administrator account defined in BM.`,
        option2: `Old log messages are removed by the new ones.`,
        option3: `Logging is suspended until the next day.`,
        option4: ` Log size limits just exist on sandbox instances.`,
        answer: 3,
    },
    {
        questionNumber: 144,
        question: `
        Imagine your client requested you to send additional information about the client's previous orders. 
        You decide to extend the Controller Order-History to send more data to the view. 
        
        Is it necessary you replicate the middleware calls exactly?`,
        option1: `Yes, otherwise you will get an Error with the text “Params do not match route”.`,
        option2: `No, it's a bad practice because it will execute those middleware twice.`,
        option3: `Yes, otherwise you will get an Error with the text Middleware chain can not be completed.`,
        option4: ` No, if the original controller has middleware it is better to modify the endpoint.`,
        answer: 2,
    },
    {
        questionNumber: 145,
        question: `
        Given this code. What would be the expected log file name? 
        
        var Logger = require('dw/system/Logger'); 
        Logger.getLogger('service', 'recaptcha').error('errormessage');`,
        option1: `custom-recaptcha-blade3-1.mon.demandware.net-0-appserver-20210503.log`,
        option2: `recaptcha-service-blade3-1.mon.demandware.net-0-appserver-20210503.log`,
        option3: `custom-service-blade3-1.mon.demandware.net-0-appserver-20210503.log`,
        option4: `error-recaptcha-blade3-1.mon.demandware.net-0-appserver-20210503.log`,
        answer: 3,
    },
    {
        questionNumber: 146,
        question: `
        How looks the code that generates this log file and content:

        custom-service-blade3-1.mon.demandware.net-0-appserver-20210503.log

        ERRORPipelineCallServlet|1726457216|Sites-RefArch-en-Site|Home-Show|PipelineCall|-zOfYSp7z4 custom.recaptcha []
        Recaptcha validation failed.`,
        option1: `var Logger = require('dw/system/Logger'); 
        Logger.getLogger('service', 'recaptcha').error('Recaptcha validation failed');`,
        option2: `require('dw/system/Logger').getLogger('service').error('Recaptcha validation failed');`,
        option3: `require('dw/system/Logger').getType('error').msg('Recaptcha validation failed');`,
        option4: `require('dw/system/Logger').getType('error').msg('Recaptcha validation failed', 'recaptcha');`,
        answer: 1,
    },
    {
        questionNumber: 147,
        question: `
        What service type will you select on BM while creating your service to integrate a REST API with encoded form data?`,
        option1: `SOAP Form`,
        option2: `HTTP`,
        option3: `HTTP Form`,
        option4: `REST`,
        answer: 3,
    },
    {
        questionNumber: 148,
        question: `
        Which is the correct syntax for passing variable attributes to a log message?`,
        option1: `Logger.warn('Content asset with ID {0} is offline', req.querystring.cid);`,
        option2: `Logger.warn('Content asset with ID ' + req.querystring.cid + ' is offline');`,
        option3: `Logger.warn('Content asset with ID ' + JSON.parse(req.querystring.cid) + ' is offline');`,
        option4: `Logger.warnWithParams('Content asset with ID {0} is offline', req.querystring.cid);`,
        answer: 1,
    },
    {
        questionNumber: 149,
        question: `
        Which of these topics are true about product bundles…`,
        option1: `Are a separate product with its own SKU and price.`,
        option2: `Are unaffected by the price of the individual products.`,
        option3: `You can not create a bundle within a bundle.`,
        option4: `None of these options.`,
        option5: `A and B are correct.`,
        answer: 5,
    },
    {
        questionNumber: 150,
        question: `
        After configuring the storefront catalog for your site... realize that one of your main categories is not displaying. 
        
        What could be the reason?`,
        option1: `No search refinement definitions are defined for this category.`,
        option2: `Products must be assigned to categories to be shown on the storefront.`,
        option3: `Categories must be online in order to be visible.`,
        option4: `B and C are correct.`,
        option5: `There are no sorting rules assigned to this category.`,
        answer: 4,
    },
    {
        questionNumber: 151,
        question: `
        How would you find what file is having issues in a call that depends on multiple files and has a few includes?`,
        option1: `Business Manager > Administration > Site development > Development Setup. Access to the log center.`,
        option2: `Business Manager > Administration > Site development > Development Setup. Logs browser folder via WebDav.`,
        option3: `Merchant Tools > Site Preferences > Logs.`,
        option4: `A and B are correct.`,
        answer: 4,
    },
    {
        questionNumber: 152,
        question: `
        How can you add locale-specific images for your site?`,
        option1: `Using custom preferences.`,
        option2: `Using custom objects.`,
        option3: `Using Business Manager Image Browser.`,
        option4: `Uploading image on cartridge static folder.`,
        option5: `C and D are correct.`,
        answer: 5,
    },
    {
        questionNumber: 153,
        question: `
        How can you replicate your sandbox custom preferences to staging and production instances?`,
        option1: `Do changes manually in staging and replicate to production.`,
        option2: `Data replication from your sandbox targeting production`,
        option3: `Data replication from your sandbox targeting staging.`,
        option4: `Export your sandbox custom preferences and import them to staging and then data replication to production.`,
        option5: `A and C are correct.`,
        option6: `A and D correct.`,
        answer: 6,
    },
    {
        questionNumber: 154,
        question: `
        Is it possible to create custom steps for business manager administration jobs?`,
        option1: `Create a steptypes.json file that describes the job step and put the file in the root directory of the cartridge.`,
        option2: `Create a customsteps.json file that describes the job step and put the file in the root directory of the cartridge.`,
        option3: `Create a steptypes.xml file that describes the job step and put the file in the root directory of the cartridge.`,
        option4: `A and C are correct.`,
        answer: 4,
    },
    {
        questionNumber: 155,
        question: `
        Choose correct process to create a custom step job`,
        option1: `Create a cartridge, create a task oriented module, define a job step in steptypes.json file and upload the cartridge and include it on the cartridge path.`,
        option2: `Create cartridge, create chunk oriented common js script, define a job step in steptypes.xml file and upload the cartridge and include it on the cartridge path.`,
        option3: `Create a cartridge, create a task oriented module, define a job step in customsteps.json file and upload the cartridge and include it on the cartridge path.`,
        option4: `A and B are correct.`,
        answer: 4,
    },
    {
        questionNumber: 156,
        question: `
        After doing the last modifications needed for the homepage you realize that your changes are not being reflected. 
        
        What could be the reason?`,
        option1: `Quota limit reached.`,
        option2: `Code not uploaded to sandbox.`,
        option3: `Cache is enabled in your sandbox.`,
        option4: `Code not compiled.`,
        option5: `A is false.`,
        answer: 5,
    },
    {
        questionNumber: 157,
        question: `
        What is the correct class to create/instantiate a webservice in Salesforce B2C Commerce Cloud?`,
        option1: `ServiceRegistry`,
        option2: `LocalServiceRegistry`,
        option3: `HTTPService`,
        option4: `HTTPServiceRegistry`,
        answer: 2,
    },
    {
        questionNumber: 158,
        question: `
        Your service needs to have a mock call configured for testing. 
        
        How can you do it?`,
        option1: `Custom site preference with boolean value.`,
        option2: `Extend LocalServiceRegistry System object to add mock value.`,
        option3: `Enable service mode Mocked and add mockCall attribute to ServiceCallback.`,
        option4: ` All answers are incorrect.`,
        answer: 3,
    },
    {
        questionNumber: 159,
        question: `
        How can you handle service call exceptions?`,
        option1: `Implement parseExeception method in ServiceCallback.`,
        option2: `Add try-catch block in parseResponse method in ServiceCallback.`,
        option3: `Call .setThrowOnError when calling the service to throw a JavaScript error if the result status is not OK`,
        option4: `Service call doesn't throw exceptions by default if you don't enable exception breaker on service profile config.`,
        answer: 3,
    },
    {
        questionNumber: 160,
        question: `
        Every time your customers log in your storefront a request using webservice framework is made to 3rd party application. 
        
        What type of service should you implement in order to perform those requests in real time?`,
        option1: `HTTP service type`,
        option2: `HTTP FORM service type`,
        option3: `A and B are correct.`,
        option4: `All answers are incorrect.`,
        answer: 4,
    },
    {
        questionNumber: 161,
        question: `
        What is the correct syntax to include content assets using a controller call?`,
        option1: `ContentMgr.getContent(id : String) : Content`,
        option2: `AssetMgr.getContent(id : String) : Content`,
        option3: `Content.getAsset(id : String) : Content`,
        option4: `ContentMgr.getAsset(id : String) : Content`,
        answer: 1,
    },
    {
        questionNumber: 162,
        question: `
        Which modules can be used to display images on the storefront?`,
        option1: `Content Slots`,
        option2: `Content Assets`,
        option3: `ISML template`,
        option4: `Content Library`,
        option5: `D is not correct`,
        answer: 5,
    },
    {
        questionNumber: 163,
        question: `
        What can you import at Merchant Tools > Content > Import & Export?`,
        option1: `Catalogs, Pricebooks & Inventory lists`,
        option2: `Libraries`,
        option3: `Images, Content Assets and folders`,
        option4: `Customers, Libraries and Custom Objects`,
        answer: 2,
    },
    {
        questionNumber: 164,
        question: `
        Which is the correct syntax to include a content asset inside the body of another content asset?`,
        option1: `$link-page:cid=ABOUT_US$`,
        option2: `$include('Page-Show', 'cid', 'ABOUT_US')$`,
        option3: `$url('Page-Show', 'cid', 'ABOUT_US')$`,
        option4: `$httpUrl('Page-Show', 'cid', 'ABOUT_US')$`,
        answer: 2,
    },
    {
        questionNumber: 165,
        question: `
        Which is the correct syntax to use $url$ with parameters inside content assets?`,
        option1: `$url(' <pipeline>' [, '<key1>', '<value1>', '<key2>', '<value2>', ...])$`,
        option2: `$url(' <pipeline>' [, 'cid', '<value1>'])$`,
        option3: `$url(' <type>[:key1=value1;key2=value2; ...])$`,
        option4: `None of the above are correct.`,
        answer: 1,
    },
    {
        questionNumber: 166,
        question: `
        Which is the correct syntax to use $include$ and what is the purpose of?`,
        option1: `$include(' <pipeline>' [, '<key1>', '<value1>', '<key2>', '<value2>', ...])$        
        Can be used to include the result of another server call.`,
        option2: `$include(' <pipeline>' [, '<key1>', '<value1>', '<key2>', '<value2>', ...])$        
        Calls the Link pipeline in the Reference Application to call pipelines.`,
        option3: `$include('<pipeline>' [, 'cid', '<value1>'])$        
        Can be used to include the result of another server call.`,
        option4: `$include('<type>[:key1=value1;key2=value2; ...])$        
        Calls the Link pipeline in the Reference Application to call pipelines.`,
        answer: 1,
    },
    {
        questionNumber: 167,
        question: `
        In which situation would you use $url$ over $include$?`,
        option1: `When you need to create an absolute URL that retains the protocol of the outer request.`,
        option2: `When you need to include the result of another server call.`,
        option3: `When you need to create an absolute URL, but with the https protocol.`,
        option4: `When you need to create an absolute URL, but with the http protocol.`,
        answer: 1,
    },
    {
        questionNumber: 168,
        question: `
        In the production instance you have two pricebooks and two catalogs 
        from two different sites that need to be imported once a month. 
        
        Which steps do you follow to import and build them?`,
        option1: `Create two jobs that will import the pricebooks, catalogs and rebuild indexes.`,
        option2: `Create one job with parallel flow that will import the pricebooks, catalogs and rebuild indexes for each site.`,
        option3: `Do it manually, because it is just once a month.`,
        option4: `Go to BM > Administrator > Site Development > Site import & Export and import the catalog and pricebooks.`,
        answer: 1,
    },
    {
        questionNumber: 169,
        question: `
        In your site you have a master catalog with all products available for the current site, 
        but not all of them are assigned to the storefront catalog. 
        
        How would you do an export with just products assigned to the storefront catalog?`,
        option1: `Merchant Tools > Product & Catalogs > Import & Export > Export the storefront catalog for current site`,
        option2: `Merchant Tools > Online Marketing > Import & Export > Export the storefront catalog for current site.`,
        option3: `Administration > Site Development > Site Import & Export > Export Catalogs > Select storefront catalog for current site.`,
        option4: `A and C are both correct.`,
        answer: 4,
    },
    {
        questionNumber: 170,
        question: `
        You are about to perform a master catalog import in your sandbox. 
        
        What kind of import mode will you execute in order to update the master catalog 
        and add new products to the existing one?`,
        option1: `UPDATE`,
        option2: `MERGE`,
        option3: `REPLACE`,
        option4: `B and C are correct`,
        answer: 4,
    },
    {
        questionNumber: 171,
        question: `
        Which command would you run from package.json in order to compile all your code?`,
        option1: `npm run build`,
        option2: `npm run compile`,
        option3: `npm run build:all`,
        option4: `npm run compile:all`,
        answer: 1,
    },
    {
        questionNumber: 172,
        question: `
        What kind of configurations are needed in order to extend the Business Manager?`,
        option1: `Create needed extension points on the bm_extensions.xml file.`,
        option2: `Create a custom cartridge and assign it on the Business Manager cartridge path (Administration > Sites > Manage Sites > Manage the Business Manager site > Cartridge Path).`,
        option3: `Business Manager can't be extended.`,
        option4: `Create a custom cartridge and assign it on the Business Manager cartridge path (Administration > Site Development > Development Setup > Cartridge Path).`,
        answer: 2,
    },
    {
        questionNumber: 173,
        question: `
        How can you export a function inside of a controller?`,
        option1: `module.exports = server.exports();`,
        option2: `server.exports = module.exports();`,
        option3: `server.append = module.exports();`,
        option4: `server.get = module.exports();`,
        answer: 1,
    },
    {
        questionNumber: 174,
        question: `
        How can you retrieve a form named formName?`,
        option1: `server.forms['formName']`,
        option2: `session.forms['formName']`,
        option3: `A and B are both correct`,
        option4: `None of the above are correct`,
        answer: 2,
    },
    {
        questionNumber: 175,
        question: `
        What is the correct syntax to call the next method inside a controller?`,
        option1: `return next();`,
        option2: `next();`,
        option3: `this.emit('route:Complete', req, res); return;`,
        option4: `return;`,
        answer: 2,
    },
    {
        questionNumber: 176,
        question: `
        Which methods can validate CSRF tokens?`,
        option1: `validateRequest();`,
        option2: `validateAjaxRequest();`,
        option3: `checkToken();`,
        option4: `A and B are both correct`,
        answer: 4,
    },
    {
        questionNumber: 177,
        question: `
        What type of data do you send from a Controller to the view?`,
        option1: `JSON`,
        option2: `Javascript Object`,
        option3: `Javascript Function`,
        option4: `Middleware`,
        answer: 2,
    },
    {
        questionNumber: 178,
        question: `
        What controller do you have to call if you need an anchor text to the homepage?`,
        option1: `Home-Start`,
        option2: `Homepage-Show`,
        option3: `Default-Start`,
        option4: `Home-Show`,
        answer: 4,
    },
    {
        questionNumber: 179,
        question: `
        How can you override an existing controller in order to modify some values 
        before current existing code is executed?`,
        option1: `Replace current controller and add needed logic using server.replace`,
        option2: `Appending needed data with server.append`,
        option3: `Create a new controller and implement needed behaviour`,
        option4: `Prepending needed data with server.prepend`,
        answer: 4,
    },
    {
        questionNumber: 180,
        question: `
        What is the correct syntax to render a template inside a Controller?`,
        option1: `res.render('home/homePage');`,
        option2: `require('dw/template/ISML').renderTemplate('home/homePage');`,
        option3: `response.renderTemplate('home/homePage');`,
        option4: `ISML.renderTemplate('home/homePage');`,
        answer: 1,
    },
    {
        questionNumber: 181,
        question: `
        What is the purpose of the keyword superModule in the SFRA controller context?`,
        option1: `Inherits the existing server object and extends it with a list of new routes from the super module.`,
        option2: `Allows the middleware chain to inherit parent controller functionality.`,
        option3: `Imports functionality from the first controller with the same name and location found to the right of the current cartridge on the cartridge path.`,
        option4: `B and C are both correct.`,
        answer: 3,
    },
    {
        questionNumber: 182,
        question: `
        How can you check the time a controller needs to perform some request?`,
        option1: `By adding in the current controller the profiler class to track spended times:
        
        require('dw/system/Profiler').start() and require('dw/system/Profiler').stop()`,
        option2: `Using code profiler in Business Manager.`,
        option3: `Using the script debugger.`,
        option4: `Adding setTimeout JS function inside the controller.`,
        answer: 2,
    },
    {
        questionNumber: 183,
        question: `
        How can you send data from the Controller to the rendered view?`,
        option1: `response.setData({...});`,
        option2: `res.setViewData({...});`,
        option3: `res.render('...', {...});`,
        option4: `res.setData({...});`,
        option5: `B and C are correct`,
        answer: 5,
    },
    {
        questionNumber: 184,
        question: `
        Check this code and determine why viewData can't be debugged: 
        
        server.get('HelloWorld', function(req, res, next) {
            viewData = res.getViewData();
            ...
        });`,
        option1: `viewData can't be debugged.`,
        option2: `viewData just should be retrieved by calling res.getData();`,
        option3: `viewData is not declared.`,
        option4: `B and C are both correct.`,
        answer: 3,
    },
    {
        questionNumber: 185,
        question: `
        In which scenario would you use Pipeline Profiler against Code Profiler?`,
        option1: `When you need to test the performance of a specific Controller.`,
        option2: `When you are testing the performance of the whole Site and trying to identify bottlenecks.`,
        option3: `You can use both for the same purpose. The unique difference is the way how results are shown.`,
        option4: `When you need to test the performance of jobs.`,
        answer: 1,
    },
    {
        questionNumber: 186,
        question: `
        On the storefront the user address being displayed is incorrect, it belongs to another customer.
        
        How to investigate the root cause?`,
        option1: `Check application logs.`,
        option2: `Add breakpoints in JS files`,
        option3: `Adding Logging to Your Scripts`,
        option4: `All the above are correct`,
        answer: 4,
    },
    {
        questionNumber: 187,
        question: `
        You have a form used in site A. For your site B you're using the same form but you need to change a form label. 
        
        How can you do it?`,
        option1: `Create a new ISML file.`,
        option2: `Create a new FORM with a new label.`,
        option3: `Create a new property file with a custom label for site B.`,
        option4: `Overwrite forms.properties file with new label.`,
        answer: 3,
    },
    {
        questionNumber: 188,
        question: `
        What is the folder hierarchy where locale files should be placed for forms 
        to be used by multiple locales or countries?`,
        option1: `resources/templates/*.properties`,
        option2: `templates/default/*.properties`,
        option3: `templates/resources/*.properties`,
        option4: `resources/forms/*.properties`,
        answer: 3,
    },
    {
        questionNumber: 189,
        question: `
        How can you include different address fields, such as state or province, 
        depending on the country for your site forms? 
        
        You can create different form definitions for each locale… but in which folder hierarchy?`,
        option1: `cartridge/templates/resources/forms/*.xml`,
        option2: `cartridge/forms/default/*.xml`,
        option3: `cartridge/resources/forms/*.xml`,
        option4: `cartridge/templates/resources/forms.xml`,
        answer: 2,
    },
    {
        questionNumber: 190,
        question: `
        Salesforce B2C Commerce forms can have validations by:`,
        option1: `Attributes`,
        option2: `Form Groups`,
        option3: `Functions`,
        option4: `Form Actions`,
        option5: `A and B are correct`,
        option6: `A and C are correct`,
        answer: 6,
    },
    {
        questionNumber: 191,
        question: `
        Storefront user is trying to submit a form but nothing is happening and data is not submitted. 
        
        What is the reason? Choose all answers that apply.`,
        option1: `No action attribute.`,
        option2: `Validation failing.`,
        option3: `CSRF validation failed.`,
        option4: `Transaction failed on controller action.`,
        option5: `All answers are correct.`,
        answer: 5,
    },
    {
        questionNumber: 192,
        question: `
        File types accepted to import data in a sandbox instance?
        
        Choose all answers that apply.`,
        option1: `JSON`,
        option2: `CSV`,
        option3: `XML`,
        option4: `YAML`,
        option5: `B and C are correct`,
        answer: 5,
    },
    {
        questionNumber: 193,
        question: `
        Select the correct syntax about how to use <isprint> tag.`,
        option1: `<isprint value="\${pdict.numbers}" style="INT" />`,
        option2: `<isprint value="\${pdict.numbers}" />`,
        option3: `<isprint value="\${pdict.numbers}" encoding="false" />`,
        option4: `<isprint value="\${pdict.numbers}" formater="INTEGER" />`,
        answer: 2,
    },
    {
        questionNumber: 194,
        question: `
        Given this piece of code, how can you access it inside the loop? 
        
        <isloopitems="\${pdict.listOfItems}" status="status" var="variable">`,
        option1: `\${pdict.variable}`,
        option2: `\${status}`,
        option3: `\${variable}`,
        option4: `\${listOfItems[status.index]]}`,
        answer: 3,
    },
    {
        questionNumber: 195,
        question: `
        What is the purpose of the <isif> tag?`,
        option1: `Anything enclosed in an <isif>... </isif> structure isn't parsed by the template processor and doesn't appear in the generated storefront page.`,
        option2: `With <isif> you can loop through the elements of a specified iterator.`,
        option3: `The <isif> tag outputs the result of expressions and template variables.`,
        option4: `The <isif> tag group lets you create conditional programming constructs using custom tags.`,
        answer: 4,
    },
    {
        questionNumber: 196,
        question: `
        Select ISML tag or tags that allows you to reuse code in your templates.`,
        option1: `<isinclude>`,
        option2: `<isloop>`,
        option3: `<isdecorate>`,
        option4: `<iscontent>`,
        option5: `A and D are correct`,
        option6: `A and C are correct`,
        answer: 6,
    },
    {
        questionNumber: 197,
        question: `
        What salesforce tag is the best way to debug on ISML?`,
        option1: `<ismodule>`,
        option2: `<isdebug>`,
        option3: `<iscontent>`,
        option4: `<isprint>`,
        answer: 4,
    },
    {
        questionNumber: 198,
        question: `
        Inside a job flow… 
        
        How can you do that a job step returns a flag to be used by next job steps?`,
        option1: `On BM enable exit status rules.`,
        option2: `Create script with return new Status(Status.OK);`,
        option3: `Create script with return new StatusFlag(Status.OK);`,
        option4: `Create script with return new Status(Status.OK, 'OK');`,
        option5: `B and D are correct`,
        answer: 5,
    },
    {
        questionNumber: 199,
        question: `
        For your current site you have multiple locales defined. 
        You're checking PDP in order to check product description. 
        
        What happens when a certain locale is not found?`,
        option1: `No description is shown.`,
        option2: `Error message is shown.`,
        option3: `Description is shown in fallback locale if configured.`,
        option4: `A and C are both correct.`,
        answer: 4,
    },
    {
        questionNumber: 200,
        question: `
        What is the best way of making use of CSRF token in your templates?`,
        option1: `Add <isscript> tag in ISML to generate that token.`,
        option2: `Add snippet csrfProtection.generateToken as a middleware in the controller.`,
        option3: `Require CSRFProtection class in the controller and send token calling generateToken() via viewData.`,
        option4: `Business Manager protects your ecommerce against CSRF attacks. No action is needed.`,
        answer: 2,
    },
    {
        questionNumber: 201,
        question: `
        Best practice about how you should restrict access to a certain page only for logged users?`,
        option1: `Checking customer.authenticated property and rendering new template if false.`,
        option2: `Checking session.userAuthenticated property and rendering new template if true.`,
        option3: `Adding userLoggedIn.validateLoggedIn in controller middleware chain`,
        option4: `Checking customer.userAuthenticated property and rendering new template if false.`,
        answer: 3,
    },
    {
        questionNumber: 202,
        question: `
        Correct syntax about how to use <isslot> tag.
        
        Select all answers that apply.`,
        option1: `<isslot id="banner-m" description="Slot description" context="catalog" />`,
        option2: `<isslot description="Slot description" context="global" />`,
        option3: `<isslot id="banner-m" description="Slot description" context="global" />`,
        option4: `<isslot id="banner-m" context="category" description="Slot description" context-object="\${pdict.category}" />`,
        option5: `C and D are correct`,
        answer: 5,
    },
    {
        questionNumber: 203,
        question: `
        What is the purpose of this piece of code: 
        
        <isinclude template="/components/modules" sf-toolkit="off" />`,
        option1: `It adds to the current template the modules isml.`,
        option2: `Allows you to use custom tags in the current template.`,
        option3: `Adds cache for current template modules.`,
        option4: `Allows you to add CSRF protection module in the current template.`,
        answer: 2,
    },
    {
        questionNumber: 204,
        question: `
        Select correct syntax to include cartridge/templates/default/content/components/mytemplate.isml file from a controller:`,
        option1: `ISML.renderTemplate('cartridge/templates/default/content/components/mytemplate.isml')`,
        option2: `ISML.renderTemplate('content/components/mytemplate.isml')`,
        option3: `ISML.render('cartridge/templates/default/content/components/mytemplate.isml')`,
        option4: `res.render('default/content/components/mytemplate.isml')`,
        answer: 2,
    },
    {
        questionNumber: 205,
        question: `
        Correct syntax for ISML.renderTemplate:`,
        option1: `ISML.renderTemplate('template/home');`,
        option2: `ISML.renderTemplate('template/home', 'data', 'value');`,
        option3: `ISML.renderTemplate('template/home', {data : 'value'});`,
        option4: `ISML.renderTemplate('template/home', ['data': 'value']);`,
        option5: `A and C are correct`,
        answer: 5,
    },
    {
        questionNumber: 206,
        question: `
        Why should you use ProductSearchHit.getRepresentedVariationValues() instead of ProductMgr.queryAllSiteProducts()?`,
        option1: `ProductSearchHit is the result of an executed search query and allows you to access products without having to access the database.`,
        option2: `Because the ProductMgr.queryAllSiteProducts() method doesn't exist anymore. It's deprecated.`,
        option3: `ProductMgr.queryAllSiteProducts() will throw quota errors.`,
        option4: `None of the above are correct.`,
        answer: 1,
    },
    {
        questionNumber: 207,
        question: `
        Why should you use ProductSearchModel.orderableProductsOnly(flag) instead of Category.getProducts()?`,
        option1: `Category.getProducts() will throw quota errors.`,
        option2: `Because the Category.getProducts() method doesn't exist anymore. It's deprecated.`,
        option3: `ProductSearchModel.orderableProductsOnly(flag) takes advantage of search index.`,
        option4: `A and B are both correct.`,
        answer: 3,
    },
    {
        questionNumber: 208,
        question: `
        Select correct syntax for URLUtils.url`,
        option1: `URLUtils.url('Home-Show', 'data', 'value');`,
        option2: `URLUtils.url('Home', 'Show', 'data', 'value');`,
        option3: `URLUtils.url('Home-Show', {'data': 'value'});`,
        option4: `URLUtils.url('Home-Show', ['data': 'value']);`,
        answer: 1,
    },
    {
        questionNumber: 209,
        question: `
        For site with en_CA locale which resource message will be displayed given this piece of code:
        
        <isprint value="\${Resource.msgf('weight.unit', 'account', null, '10')}"/> 
        
        And this values on properties files:

        account.properties → weight.unit={0} kilos
        account_en.properties → weight.unit={0} stones
        account_en_US.properties → weight.unit={0} pounds`,
        option1: `10 kilos`,
        option2: `10 stones`,
        option3: `10 pounds`,
        option4: `null stones`,
        answer: 2,
    },
    {
        questionNumber: 210,
        question: `
        Given this piece of code what should be the expected output?
        
        server.append('Show', function(req, res, next) {
            res.render('components/landing1');
        });`,
        option1: `landing1.isml will be shown.`,
        option2: `nothing will be rendered.`,
        option3: `components/landing1 will be shown depending on the parent controller.`,
        option4: `A and C are both correct.`,
        answer: 2,
    },
    {
        questionNumber: 211,
        question: `
        Select best practices you can do in order to improve page load speed.`,
        option1: `Reduce the number of HTTP requests. Enable cache.`,
        option2: `Minify and compress JS and CSS.`,
        option3: `A and B are both correct.`,
        option4: `Enable HTTP2 and HTTPS in Business Manager.`,
        answer: 3,
    },
    {
        questionNumber: 212,
        question: `
        What do you need to include inside the body of a content asset to create a link to a page with id pageId?`,
        option1: `URLUtils.url('Page-Show', 'cgid', 'pageId')`,
        option2: `$URLUtils.url('Page-Show', 'cid', 'pageId')$`,
        option3: `$url('Page-Show', 'cid', 'pageId')$`,
        option4: `$url('Page-Show', 'id', 'pageId')$`,
        answer: 3,
    },
    {
        questionNumber: 213,
        question: `
        Which code snippet will create a link to a content inside of the body of a content asset?`,
        option1: `$url('Content-Show', 'cid', 'pageId')$`,
        option2: `$httpUrl('Page-Show', 'cid', 'pageId')$`,
        option3: `httpsUrl('Page-Show', 'cid', 'pageId')`,
        option4: `All options are correct`,
        answer: 2,
    },
    {
        questionNumber: 214,
        question: `
        After finishing current development, the tech lead realizes that current code works as expected 
        but it can generate a potential threat in future. 
        
        Developer decides to log the code, but under what kind of logger it should be done?`,
        option1: `Logger.info`,
        option2: `Logger.warn`,
        option3: `Logger.error`,
        option4: `Logger.debug`,
        answer: 2,
    },
    {
        questionNumber: 215,
        question: `
        What are the steps you must follow in Business Manager to import a new Catalog for Site A.`,
        option1: `Select Site A > Merchant Tools > Products and Catalogs > Import & Export > Upload and then import the catalog.`,
        option2: `Select Site A > Merchant Tools > Content > Site Import & Export > Upload and then import the catalog.`,
        option3: `Administration > Site Development > Site Import & Export > Upload and then import the catalog.`,
        option4: `A and C are both correct.`,
        answer: 4,
    },
    {
        questionNumber: 216,
        question: `
        A user has received admin access to a SFCC sandbox with no data. 
        He updated the cartridges but when he clicks on the storefront url a 404 page shows. 
        
        How to fix the issue?`,
        option1: `Site Import to import Storefront Reference Architecture Demo Sites.`,
        option2: `Clear site cache.`,
        option3: `Site Reindex.`,
        option4: `Site Import and import exported data from development instance.`,
        answer: 4,
    },
    {
        questionNumber: 217,
        question: `
        What three pieces of information do you need when you want to establish a new Digital Server Connection?`,
        option1: `hostname, username and password`,
        option2: `hostname, cartridges and certificate`,
        option3: `username, password and cartridges`,
        option4: `hostname, username and code version`,
        answer: 1,
    },
    {
        questionNumber: 218,
        question: `
        How can you stop quota violation?`,
        option1: `Modifying the code`,
        option2: `Ticket to Salesforce`,
        option3: `Deactivate violation in Business Manager. Administration > Operations > Quota Status`,
        option4: `Deactivate violation in Business Manager. Administration > Global Preferences > Quota Status`,
        answer: 1,
    },
    {
        questionNumber: 219,
        question: `
        What is the correct syntax to invalidate the addressId field from addressForm?`,
        option1: `addressForm.invalidateFormElement = true;`,
        option2: `addressForm.invalidateFormElement('addressId');`,
        option3: `addressForm.addressid.invalidateFormElement();`,
        option4: `forms[addressForm].invalidateFormElement('addressId');`,
        answer: 3,
    },
    {
        questionNumber: 220,
        question: `
        What is the best way to add another action to your form 
        to be validated properly in SFRA Controller?`,
        option1: `Edit form isml file to modify form action endpoint.`,
        option2: `Edit form xml file to add new action property.`,
        option3: `Edit form property file to add different labels.`,
        option4: `Edit form xml file to add new field property.`,
        answer: 2,
    },
    {
        questionNumber: 221,
        question: `
        Your client asks for a new feature. 
        He needs for internal purposes to store some data during the whole checkout process. 
        
        In which object would you save this data?`,
        option1: `session object`,
        option2: `request object`,
        option3: `page object`,
        option4: `checkout object`,
        answer: 1,
    },
    {
        questionNumber: 222,
        question: `
        You have been requested to add a German locale to your current Site. 
        
        After doing that on Business Manager what should be the resource property file for this language?`,
        option1: `templates/resources/storefront_de.properties`,
        option2: `templates/de/resources/storefront_de.properties`,
        option3: `templates/de/resources/storefront.properties`,
        option4: `resources/templates/ge_storefront.properties`,
        answer: 1,
    },
    {
        questionNumber: 223,
        question: `
        The Account controller is trying to validate a CSRF protection request 
        but after debugging you realize that the result of this validation is always false. 
        
        What is the root cause?`,
        option1: `CSRF protection disabled in Business Manager`,
        option2: `Account form doesn't have a security attribute in the xml file.`,
        option3: `CSRF check should be inside try/catch block code.`,
        option4: `CSRF token is not submitted in the form.`,
        answer: 4,
    },
    {
        questionNumber: 224,
        question: `
        A developer notices that some key attributes of the products are missing. 
        
        He has all the import files. What should he import to fix it?`,
        option1: `Meta Data`,
        option2: `Global Custom Objects`,
        option3: `Source Codes`,
        option4: `Catalogs`,
        answer: 1,
    },
    {
        questionNumber: 225,
        question: `
        You have developed a new template that shows different information depending on 
        the current customer group. 
        
        What is the best way to test all scenarios before pushing your code to the master branch to initiate deployment?`,
        option1: `Add manually your user to each customer group every time you need to test it.`,
        option2: `Add a request parameter to indicate which customer you need to test and modify controller behavior.`,
        option3: `Use the site preview settings option on Business Manager. Administration > Code Profiler.`,
        option4: `Make use of the Site Preview Settings for Storefront Toolkit and select the customer group you need to test.`,
        answer: 4,
    },
    {
        questionNumber: 226,
        question: `
        Select all available options that Storefront Toolkit has to make it easier 
        to test your site.`,
        option1: `Site preview settings`,
        option2: `Search indexes`,
        option3: `Page Designer settings`,
        option4: `Cache info`,
        option5: `A and D are correct`,
        answer: 5,
    },
    {
        questionNumber: 227,
        question: `
        You have a global content slot configured for your site. 
        You need to display the most popular products. 
        
        What content type inside content slot configuration is needed to achieve it?`,
        option1: `Content Asset`,
        option2: `HTML`,
        option3: `Einstein products`,
        option4: `Recommendation`,
        answer: 4,
    },
    {
        questionNumber: 228,
        question: `
        A developer suspects that there is an error inside code while checking 
        on a production instance. 
        
        What should he do?`,
        option1: `Check request log to validate the existence of the logical error.`,
        option2: `Set breakpoints, debug and check the values of variables against production.`,
        option3: `Import data in his own sandbox and upload the same code version as installed on production to reproduce the error.`,
        option4: `Enable debug mode in Business Manager of production instance to check error existence.`,
        option5: `A and C are correct.`,
        answer: 5,
    },
    {
        questionNumber: 229,
        question: `
        How can you improve the performance of 3rd party API REST that your commerce site is requesting?`,
        option1: `By implementing dw.net.HTTPClient class in your code.`,
        option2: `By implementing dw.svc.HTTPService class in your code.`,
        option3: `By using service integration and increasing waiting time for API calls.`,
        option4: `None of the above are correct.`,
        answer: 3,
    },
    {
        questionNumber: 230,
        question: `
        What of these Techniques are used for Improving Site Performance?`,
        option1: `Using GET vs. POST Requests.`,
        option2: `Make Fewer and Smaller HTTP Requests.`,
        option3: `Reduce the Size and Number of Cookies.`,
        option4: `Expires and Conditional Headers.`,
        option5: `All answers are correct.`,
        answer: 5,
    },
    {
        questionNumber: 231,
        question: `
        What is the optimized way to retrieve products from a specific category?`,
        option1: `Category.getProducts();`,
        option2: `ProductSearchModel.productSearchHits`,
        option3: `CategorySearchHit.getProducts();`,
        option4: `CategoryMgr.getMainProducts();`,
        answer: 2,
    },
    {
        questionNumber: 232,
        question: `
        Where can you configure Allowed Origins for OCAPI requests?`,
        option1: `By adding the Origin header on the request with the domain name.`,
        option2: `On Business Manager. Administration > Site Development > Open Commerce API Settings. Select site and add allowed_origins in the text field.`,
        option3: `On Business Manager. Administration > Site Development > Open Commerce API Settings. Select site and add Access-Control-Allow in the text field.`,
        option4: `By adding the domain name on Site preferences.`,
        answer: 2,
    },
    {
        questionNumber: 233,
        question: `
        What is the best way to update and retrieve Salesforce B2C Commerce data from 3rd party OMS?`,
        option1: `Job`,
        option2: `OCAPI`,
        option3: `CSV file`,
        option4: `XML file`,
        answer: 2,
    },
    {
        questionNumber: 234,
        question: `
        Is it possible to check OCAPI requests your site has received?`,
        option1: `Yes, by checking logs`,
        option2: `Yes, by using Pipeline Profiler`,
        option3: `Yes, by using Code Profiler`,
        option4: `No, it's not possible`,
        answer: 3,
    },
    {
        questionNumber: 235,
        question: `
        Which HTTP methods are available on OCAPI calls?`,
        option1: `GET, PATCH, OPTIONS, DELETE`,
        option2: `POST, GET, DELETE, TRACE`,
        option3: `POST, GET, PUT, CONNECT`,
        option4: `GET, POST, PUT, DELETE`,
        answer: 4,
    },
    {
        questionNumber: 236,
        question: `
        resource_id settings on OCAPI requests allows you to…`,
        option1: `to control which properties are included in the response document.`,
        option2: `specify the time period in seconds before the response document becomes stale.`,
        option3: `identify which API resource you are requesting.`,
        option4: `specify which operation you want to perform (GET/POST/DELETE...)`,
        answer: 3,
    },
    {
        questionNumber: 237,
        question: `
        What configuration is needed in the Business Manager to use OCAPI?`,
        option1: `token_id, resource_id and read_attributes`,
        option2: `resource_id, read_attributes and bearer_token`,
        option3: `resource_id, read_attributes and oauth_token`,
        option4: `client_id, resource_id and read_attributes`,
        answer: 4,
    },
    {
        questionNumber: 238,
        question: `
        How can a developer retrieve selected products and process them 
        from an iPhone without using JavaScript controllers?`,
        option1: `Use native code to call OCAPI`,
        option2: `Use import/export in Business Manager`,
        option3: `FTP`,
        option4: `WebDav`,
        answer: 1,
    },
    {
        questionNumber: 239,
        question: `
        What type of data format for resources are allowed by the Open Commerce API?`,
        option1: `CSV`,
        option2: `JSON`,
        option3: `XML`,
        option4: `TXT`,
        option5: `B and C are correct`,
        answer: 5,
    },
    {
        questionNumber: 240,
        question: `
        If the developer has a sandbox with the hostname test.demandware.net, 
        which URL can be used for OCAPI requests?`,
        option1: `http(s)://test.demandware.net[/s/site_id]/dw/api_type/`,
        option2: `http(s)://test.demandware.net/s/site_id/dw/api_type/`,
        option3: `http(s)://test.demandware.net/s/site_id/client_id/api_type/`,
        option4: `http(s)://test.demandware.net/s/site_id/d/s/api_type/`,
        answer: 2,
    },
    {
        questionNumber: 241,
        question: `
        Which OCAPI hook is used to modify post Basket response?`,
        option1: `dw.ocapi.shop.basket.beforePOST`,
        option2: `dw.ocapi.shop.basket.afterPOST`,
        option3: `dw.ocapi.shop.basket.modifyPOSTResponse`,
        option4: `dw.ocapi.shop.basket.validateBasket`,
        answer: 3,
    },
    {
        questionNumber: 242,
        question: `
        Developer investigated and found that the call center using OCAPI has delivery issues 
        because the address validation is not the same as configured on the storefront. 
        
        How do you fix this issue?`,
        option1: `Expose the validation to be called from the call center.`,
        option2: `Implement the same validation on the call center system.`,
        option3: `Hook in to the "before" method.`,
        option4: `Manually validate orders at the post office.`,
        answer: 3,
    },
    {
        questionNumber: 243,
        question: `
        What do all these resources InventoryListSearch, InventoryLists, ProductInventoryRecords, 
        ProductSearch have in common?`,
        option1: `All of them can be found under the dw.catalog package.`,
        option2: `Are available under new Salesforce Commerce API.`,
        option3: `They can be found on Open Commerce API.`,
        option4: `None of the above are correct.`,
        answer: 3,
    },
    {
        questionNumber: 244,
        question: `
        How can you limit service calls for error and success calls?`,
        option1: `Add necessary configuration on ServiceDefinition object for ServiceRegistry definition.`,
        option2: `Business Manager > Administration > Operations > Services and Enable service rate limit.`,
        option3: `Business Manager > Administration > Operations > Services > Profile and Enable service rate limit.`,
        option4: `Business Manager > Administration > Operations > Services > Profile and Enable circuit breaker.`,
        answer: 4,
    },
    {
        questionNumber: 245,
        question: `
        A product is assigned to the apparel-m-catalog but not being displayed on the storefront. 
        
        What could be the main reason?`,
        option1: `Product without stock`,
        option2: `apparel-m-catalog not assigned to current site`,
        option3: `Product not assigned to a category`,
        option4: `A and C are both correct`,
        answer: 2,
    },
    {
        questionNumber: 246,
        question: `
        What should be the correct cartridge path if you want 
        to add some extra data in the Checkout-Begin controller?`,
        option1: `app_storefront_base:app_storefront_custom:int_cybersource_sfra`,
        option2: `app_storefront_base:int_cybersource_sfra:app_storefront_base`,
        option3: `int_cybersource_sfra:app_storefront_base:app_storefront_custom`,
        option4: `app_storefront_custom:int_cybersource_sfra:app_storefront_base`,
        answer: 4,
    },
    {
        questionNumber: 247,
        question: `
        Is it possible to share customer lists between sites?`,
        option1: `No, it's not possible.`,
        option2: `Yes, but you must open a ticket to support the team.`,
        option3: `Yes, go to Business Manager. Administration > Manage Sites > Select Site > Select desired customer List on the dropdown list.`,
        option4: `B and C are both correct.`,
        answer: 3,
    },
    {
        questionNumber: 248,
        question: `
        How can you make it possible that two sandboxes from the same realm will have the same metadata?`,
        option1: `Remote import from production`,
        option2: `Site export from one sandbox and site import from the other`,
        option3: `Pushing metadata via WebDAV`,
        option4: `Go Control Center and replicate data from sandbox1 to sandbox2`,
        answer: 2,
    },
    {
        questionNumber: 249,
        question: `
        Client asks you to add a new locale for your current site. 
        
        How can you do it?`,
        option1: `Business Manager > Administration > Locales`,
        option2: `Business Manager > Administration > Global preferences > Locales`,
        option3: `Business Manager > Merchant Tools > Select Site > Site Preferences > Locales`,
        option4: `B and then C`,
        answer: 4,
    },
    {
        questionNumber: 250,
        question: `
        You have a site being used mostly by Europe but also is used in the United Kingdom. 
        
        What should be the default currency?`,
        option1: `Euro`,
        option2: `Pound`,
        option3: `Multi-Currency`,
        option4: `None`,
        answer: 1,
    },
    {
        questionNumber: 251,
        question: `
        A site is defined with a tax table as NET but you want to change it to GROSS. 
        
        How can you do it?`,
        option1: `Create a new site with GROSS taxation.`,
        option2: `Modify Storefront preference to change it to GROSS.`,
        option3: `Edit Taxation System Object.`,
        option4: `Business Manager > Administration > Manage Sites > Select Site and change taxation.`,
        answer: 1,
    },
    {
        questionNumber: 252,
        question: `
        You created a new template for my account and needed 
        to add new custom data to the view, your cartridge name is app_storefront_custom. 
        
        How should the cartridge path look?`,
        option1: `app_storefront_base:int_smarty_streets:int_paypal:app_storefront_custom`,
        option2: `app_storefront_base:app_storefront_custom:int_smarty_streets:int_paypal`,
        option3: `app_storefront_custom:app_storefront_base:int_smarty_streets:int_paypal`,
        option4: `app_storefront_custom:int_smarty_streets:int_paypal:app_storefront_base`,
        answer: 4,
    },
    {
        questionNumber: 253,
        question: `
        A developer uploaded code to a code version, 
        but the code is not working, what might be the reason?`,
        option1: `Wrong code version activated`,
        option2: `Wrong connection details in dw.json`,
        option3: `500 Error. Check sandbox logs`,
        option4: `All the above are correct`,
        answer: 4,
    },
    {
        questionNumber: 254,
        question: `
        A site has been exported from the staging instance. 
        
        How can developers from the same realm import the exported site?`,
        option1: `Check if staging export is set as global to directly import it from sandbox.`,
        option2: `Do a remote export by connecting to staging instance.`,
        option3: `A and B are correct.`,
        option4: `In Staging instance under Administration > Replication > Data Replication > Create new replication targeting to sandboxes.`,
        answer: 3,
    },
    {
        questionNumber: 255,
        question: `
        Italy is added as a new country where you can proceed with a checkout on your site. 
        
        What should be done to set the tax for this new country?`,
        option1: `In Business Manager: Select Site > Ordering > Taxation > Add new Tax Class`,
        option2: `In Business Manager: Select Site > Ordering > Taxation > Add new Tax Jurisdiction`,
        option3: `In Business Manager: Select Site > Ordering > Taxation > Add new Tax Rate for Italy`,
        option4: `No action is needed if Italy has the same taxation as other countries`,
        answer: 2,
    },
    {
        questionNumber: 256,
        question: `
        A client wants to change his site taxation option from Gross to Net for existing site.
        
        What should he do?`,
        option1: `Change taxation preference in Storefront Configs.`,
        option2: `Change taxation preference in Storefront Configs.`,
        option3: `Enable at global level the preference to update taxation.`,
        option4: `Open Ticket to Salesforce support.`,
        answer: 4,
    },
    {
        questionNumber: 257,
        question: `
        The client requested you to add unlimited stock 
        for selected products because it is black Friday. 
        
        How should the developer perform this task?`,
        option1: `Update product inventory and set availability to always.`,
        option2: `Update product inventory and set stock level to infinite.`,
        option3: `Update product inventory and set allocation to true.`,
        option4: `Update product inventory and set perpetual to true.`,
        answer: 4,
    },
    {
        questionNumber: 258,
        question: `
        Which log messages will be logged on a log category 
        if the log level for this category is set to WARN on Business Manager?`,
        option1: `WARN, FATAL and ERROR in all instances except production.`,
        option2: `WARN, DEBUG, FATAL and ERROR.`,
        option3: `WARN, INFO, DEBUG and ERROR.`,
        option4: `None of these options.`,
        answer: 4,
    },
    {
        questionNumber: 259,
        question: `
        If you set your logs root level to WARN what kind of logs will be generated?`,
        option1: `WARN, FATAL and ERROR.`,
        option2: `DEBUG, WARN, ERROR and FATAL.`,
        option3: `ERROR and FATAL.`,
        option4: `ERROR and above.`,
        answer: 1,
    },
    {
        questionNumber: 260,
        question: `
        After spending some time investigating a weird behavior in your storefront, 
        you realize that some components of the website are not up to date with the latest content in BM. 
        
        How can you check the time cache for those components?`,
        option1: `Check the cache time applied for current controller rendering html.`,
        option2: `Use the storefront toolkit to debug element caches.`,
        option3: `All components rendered in every url have the same cache period.`,
        option4: `Go to Business Manager > Administration > Operations > Custom Caches.`,
        answer: 2,
    },
    {
        questionNumber: 261,
        question: `
        How can you limit service calls in Business Manager?`,
        option1: `Enable circuit breaker in service profile.`,
        option2: `Enable rate limit in service profile.`,
        option3: `Activate Force PRD Behavior.`,
        option4: `Set connection Timeout higher than 0 ms.`,
        answer: 2,
    },
    {
        questionNumber: 262,
        question: `
        Where should you save username and password to be used on service in Service Framework?`,
        option1: `Custom preference on System preferences.`,
        option2: `In the JSON config file.`,
        option3: `Service credentials for current service.`,
        option4: `Create Custom Attributes for Web Services to save it.`,
        answer: 3,
    },
    {
        questionNumber: 263,
        question: `
        During weekly service inspection it was found that the service has lots of unavailable calls, 
        how do you fix this?`,
        option1: `Increase connection service timeout on service profile.`,
        option2: `Enable circuit breaker in service profile.`,
        option3: `Enable rate limit in service profile.`,
        option4: `Add a try-catch code block to handle these calls.`,
        answer: 1,
    },
    {
        questionNumber: 264,
        question: `
        Is it possible to create cache partitions in order to invalidate cache for some pipelines together?`,
        option1: `No, each Pipeline has its own cache and there is no guarantee that some of them invalidates at the same time.`,
        option2: `Go to Business Manager > Administration > Manage Sites > Site > Cache. Under the cache tab, add a new partition and add desired pipelines.`,
        option3: `Go to Business Manager > Merchant Tools > Site > Site Preferences > Cache. Under the cache tab, add a new partition and add desired pipelines.`,
        option4: `Go to Business Manager > Administration > Operations > Custom Cache. Add a new partition and add desired pipelines.`,
        answer: 2,
    },
    {
        questionNumber: 265,
        question: `
        You need to store customer comments for the orders. 
        
        Where should you save those comments?`,
        option1: `Customer System Object`,
        option2: `Order System Object`,
        option3: `Comments Custom Object`,
        option4: `System Transaction`,
        answer: 2,
    },
    {
        questionNumber: 266,
        question: `
        You create a new custom attribute but it is not being displayed in the edit page of the object. 
        
        What could be wrong?`,
        option1: `Custom attributes with value type “Set of Strings” are not displayed.`,
        option2: `You forgot to add it to the grouping tab in the object definition.`,
        option3: `Custom attribute not localizable.`,
        option4: `Wrong code version.`,
        answer: 2,
    },
    {
        questionNumber: 267,
        question: `
        What is the correct syntax to create a Custom Object?`,
        option1: `CustomObjectMgr.createCustomObject(type : String, keyValue : String) : CustomObject`,
        option2: `CustomObject.createCustomObject(type : String, keyValue : String) : CustomObject`,
        option3: `SystemObject.createObject(type: String, keyValue : String): SystemObject | CustomObject`,
        option4: `Object.create('custom', type: String, keyValue : String): Object`,
        answer: 1,
    },
    {
        questionNumber: 268,
        question: `
        Given this controller code, figure out what would be the result:

        var email = req.querystring.email;
        var name = req.querystring.name;

        var newsletter = CustomObjectMgr.createCustomObject('NewsletterSubscription', email);

        newsletter.custom.name = name;
        newsletter.custom.year = (new Date()).getFullYear();

        next();`,
        option1: `NewsletterSubscription custom object created.`,
        option2: `NewsletterSubscription custom object created with null year attribute.`,
        option3: `Error will be thrown, because custom object creation must be inside Transaction.`,
        option4: `Error because “return” keyword is mandatory.`,
        answer: 3,
    },
    {
        questionNumber: 269,
        question: `
        What is the purpose of Shared Libraries?`,
        option1: `Share a Library between instances.`,
        option2: `Share a Library between realms.`,
        option3: `Share a Library between environments.`,
        option4: `Share a Library between sites.`,
        answer: 4,
    },
    {
        questionNumber: 270,
        question: `
        What should be added in the OCAPI configuration attributes to allow updating Shop Data in our Site?`,
        option1: `read_attributes`,
        option2: `write_attributes`,
        option3: `resource_id`,
        option4: `methods`,
        answer: 2,
    },
    {
        questionNumber: 271,
        question: `
        How can you create custom Search Refinements?`,
        option1: `In Business Manager, Merchant Tools > Catalogs > Edit Storefront Catalog assigned to site > Edit category where you want to add search refinements and click “Search Refinements Definition” tab.`,
        option2: `In Business Manager, Merchant Tools > Catalogs > Edit master catalog > Click on the “Administration Catalog Preferences” tab and create new refinements.`,
        option3: `Custom search refinements are not allowed, you must enable pre configured system search refinements.`,
        option4: `A and B are both correct.`,
        answer: 1,
    },
    {
        questionNumber: 272,
        question: `
        Your site is experiencing this behavior… Search refinements are working for a subcategory but not for parent category. 
        
        How can this issue be fixed?`,
        option1: `Duplicate the custom search refinement for both categories (parent and subcategory)`,
        option2: `Navigate to Search > Search Indexes, and rebuild your product search index`,
        option3: `Edit Bucket Type of search refinement values to allow parent category`,
        option4: `Add desired custom search refinement to the parent category`,
        answer: 4,
    },
    {
        questionNumber: 273,
        question: `
        Select correct steps to add a new sorting rule.`,
        option1: `In Business Manager, Merchant Tools > Search > Sorting Rules > Create new one`,
        option2: `In Business Manager, Merchant Tools > Search > Storefront Sorting Options > Create new one`,
        option3: `In Business Manager, Merchant Tools > Online Marketing > Sorting Rules > Create new one`,
        option4: `A and B are both correct`,
        answer: 1,
    },
    {
        questionNumber: 274,
        question: `
        The customer is searching for sports products (running, hiking, etc). 
        
        How to add a filter for that?`,
        option1: `Create custom preference`,
        option2: `Create custom product attribute. And create a new search refinement`,
        option3: `Create a new storefront category and assign products to the new category`,
        option4: `B and C are both correct`,
        answer: 4,
    },
    {
        questionNumber: 275,
        question: `
        When the client searches for car accessories you want results including just car accessories, 
        excluding tech accessories and other. 
        
        Which search dictionary utilities should you use to achieve that?`,
        option1: `Synonym Dictionary`,
        option2: `Hypernym Dictionary`,
        option3: `Common Phrase Dictionary`,
        option4: `Compound Word Dictionary`,
        answer: 1,
    },
    {
        questionNumber: 276,
        question: `
        For your Site needs you added a new custom attribute “madeIn” for your products. 
        Your goal is that users can find products that were made in some countries… so, you need to make this custom attribute searchable. 
        
        How should you proceed?`,
        option1: `When creating the custom attribute, select the Searchable option.`,
        option2: `When creating the custom attribute, select the Localizable option.`,
        option3: `In Business Manager, Merchant Tools > Search > Searchable Attributes.`,
        option4: `In Business Manager > Administration > Operations > Searchable Attributes.`,
        answer: 3,
    },
    {
        questionNumber: 277,
        question: `
        How should a developer optimize inefficient product querying?`,
        option1: `By minimizing post-processing using a refinement instead.`,
        option2: `By enabling search cache.`,
        option3: `Following Pipeline Profiler recommendations.`,
        option4: `None of the above are correct.`,
        answer: 1,
    },
    {
        questionNumber: 278,
        question: `
        A developer sees that product tiles are getting cached for a short time. 
        
        What will be the steps required to debug this error?`,
        option1: `Enable caching information in storefront toolkit.`,
        option2: `Enable template debugger and see if producttile.isml has a cache time which is lower.`,
        option3: `Check logs.`,
        option4: `Check Cache time in Site settings in Business Manager.`,
        option5: `A and D are both correct.`,
        answer: 5,
    },
    {
        questionNumber: 279,
        question: `
        How can a developer debug code to find the root cause for a logical error? 
        
        Select all answers that apply.`,
        option1: `Check logs in Business Manager.`,
        option2: `Put debug breakpoints in code and debug.`,
        option3: `Take a look at the Log Center.`,
        option4: `Take a look at the Control Center.`,
        option5: `All are correct except D.`,
        answer: 5,
    },
    {
        questionNumber: 280,
        question: `
        Merchant wants to control service timeout, how to accomplish this?`,
        option1: `Configure the service timeout as a new site preference.`,
        option2: `In the service profile update the connection timeout field.`,
        option3: `Configuration JSON file.`,
        option4: `Configuration JSON file.`,
        answer: 2,
    },
    {
        questionNumber: 281,
        question: `
        What are the steps needed to enable debug logging in Business Manager?`,
        option1: `Administration > Operations > Custom Log Settings > Enable DEBUG.`,
        option2: `Answer A but only applies to Sandboxes and Development instances.`,
        option3: `Log Center > Settings > Enable Debug Logging.`,
        option4: `A and C are correct.`,
        answer: 1,
    },
    {
        questionNumber: 282,
        question: `
        A sellable field is needed for a Product System Object. 
        
        What is the current syntax to access this field?`,
        option1: `prod.sellable`,
        option2: `prod.extensible.sellable`,
        option3: `prod.custom.sellable`,
        option4: `prod.persistent.sellable`,
        answer: 3,
    },
    {
        questionNumber: 283,
        question: `
        A developer wants to add a searchable attribute to a product. Incremental index is enabled. 
        
        What are the steps needed? Select all answers that apply`,
        option1: `Add attribute to search index. Rebuild search index.`,
        option2: `Make attribute searchable. Add attribute to search index.`,
        option3: `Make attribute searchable. Wait for incremental index.`,
        option4: `Make attribute searchable. Rebuild search index.`,
        option5: `C and D are correct.`,
        answer: 5,
    },
    {
        questionNumber: 284,
        question: `
        Customer needs to add a Material Type attribute to the Product System Object. 
        This attribute needs to be predefined by the merchandising team. 
        
        Which type should you use?`,
        option1: `String`,
        option2: `Integer`,
        option3: `Enum of String`,
        option4: `Set of String`,
        answer: 3,
    },
    {
        questionNumber: 285,
        question: `
        Customer wants to add a new model attribute to a product. The text should be localized. 
        
        How should he do it?`,
        option1: `Add the new custom attribute as localizable.`,
        option2: `Use resources to update the text.`,
        option3: `Add the new custom attribute as searchable.`,
        option4: `None of the above are correct.`,
        answer: 1,
    },
    {
        questionNumber: 286,
        question: `
        What is the most efficient way to search for a content asset when a customer is performing 
        a search in your storefront?`,
        option1: `Class ContentSearchModel`,
        option2: `Class ContentMgr`,
        option3: `Class Content`,
        option4: `Class ContentAssetMgr`,
        answer: 1,
    },
    {
        questionNumber: 287,
        question: `
        You need to modify a content slot to display different content for a specific customer group. 
        
        How can you do it?`,
        option1: `Create a new content slot and add a conditional in the isml to display different ones according to the current customer group.`,
        option2: `Edit the content assets assigned to the content slot and specify the customer group where it should be displayed.`,
        option3: `Enable different content slot configurations and assign different schedules in order to add Customer group qualifiers.`,
        option4: `Edit content assets qualifiers assigned to slot configuration and add Customer group.`,
        answer: 3,
    },
    {
        questionNumber: 288,
        question: `
        Where should catalog product images be uploaded?`,
        option1: `Salesforce B2C Commerce Image Storage`,
        option2: `External image management system. 
        Update image URL reference on catalog.`,
        option3: `A and B are both correct.`,
        option4: `None of the above are correct.`,
        answer: 3,
    },
    {
        questionNumber: 289,
        question: `
        When using Page Designer, how can you exclude certain components to be used inside certain pages/layouts?`,
        option1: `component_type_exclusions`,
        option2: `attribute_definitions`,
        option3: `attribute_definition_groups`,
        option4: `region_definition_excluded_components`,
        answer: 1,
    },
    {
        questionNumber: 290,
        question: `
        How to restrict certain payment methods to certain countries?`,
        option1: `Merchant Tools > Select Site > Ordering > Payment Methods > Select Payment method edit and choose countries where this payment method is available.`,
        option2: `Merchant Tools > Select Site > Ordering > Payment Methods > Select Payment method edit and choose countries where this payment method is not available.`,
        option3: `Administration > Operations > Payment processors > Countries exclusions.`,
        option4: `Merchant Tools > Select Site > Ordering > Payment Processors > Select Payment method edit and choose countries where this payment method is available.`,
        answer: 1,
    },
    {
        questionNumber: 291,
        question: `
        How can you have a Gift certificate with infinite balance?`,
        option1: `Merchant Tools > Site > Online Marketing > Gift Certificates and create new ones with “no limit” amount.`,
        option2: `Merchant Tools > Site > Online Marketing > Gift Certificates and create new ones with “no limit” balance.`,
        option3: `Administration > Global Preferences > Gift Certificates > Enable no limit amount. Then follow steps as described in answer A.`,
        option4: `It can't be done.`,
        answer: 4,
    },
    {
        questionNumber: 292,
        question: `
        Is it possible to modify content slot type to product from recommendation?`,
        option1: `No, after the recommendation slot is set, Einstein takes care of the behavior.`,
        option2: `No, you must create a new one and specify the new content slot id in the ISML.`,
        option3: `Yes, edit the content slot and change the content type to product.`,
        option4: `Yes, you must open a ticket to salesforce support to enable the possibility to change content type to product.`,
        answer: 3,
    },
    {
        questionNumber: 293,
        question: `
        What should you do to disable Apple Pay in Spain?`,
        option1: `Go to Ordering > PaymentMethods`,
        option2: `Go to Ordering > PaymentProcessors`,
        option3: `A and B are both correct`,
        option4: `None of the above are correct`,
        answer: 1,
    },
    {
        questionNumber: 294,
        question: `
        How can you create a product bundle?`,
        option1: `By importing a new catalog in xml format.`,
        option2: `Edit products you want to add to the bundle and under the Bundles tab assign them to the Bundle.`,
        option3: `Create a new product and under the Bundles tab assign the products included in this bundle.`,
        option4: `A and C are correct.`,
        answer: 4,
    },
    {
        questionNumber: 295,
        question: `
        What are the main differences of using Page Designer or content slots for creating a page?`,
        option1: `Campaigns can be used with Page Designer but now with slots`,
        option2: `Promotions can be used with slots but not with Page Designer`,
        option3: `Schedule can be set for slots but not for Page Designer`,
        option4: `All the above are false.`,
        answer: 4,
    },
    {
        questionNumber: 296,
        question: `
        You are given a task of storing some info during the checkout. 
        The value has to be automatically exported together with order. 
        
        How should the developer proceed?`,
        option1: `Store the value in a Custom Object.`,
        option2: `Store the value in Checkout System Object.`,
        option3: `Store the value in Order System Object.`,
        option4: `Store the value on session and create a job to export orders.`,
        answer: 3,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: `
        `,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
];

export default {
    questions,
}
