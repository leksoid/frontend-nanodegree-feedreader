$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('each feed in array defined/has URL',function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        })
        
        it('each feed in array defined/has name',function(){
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        })
        
    });

    describe('The menu', function(){
        let body, menuIcon;

        beforeEach(function(){
            body = document.querySelector('body');
            menuIcon = document.querySelector('.menu-icon-link');
        })

        it('is hidden by default', function(){
            expect(body).toHaveClass('menu-hidden');
        })

        it('is displayed/hidden when menu icon clicked', function(){
            menuIcon.click();
            expect(body).not.toHaveClass('menu-hidden');
            menuIcon.click();
            expect(body).toHaveClass('menu-hidden');
        })
    });
    
    describe('Initial Entries',function(){
        let feedBody;

        beforeEach(function(done){
            feedBody = document.querySelector('.feed');
            loadFeed(0,done);
        })

        it('displayed at least one on loadFeed call', function(done){
            expect(feedBody.children.length).toBeGreaterThan(0);
            expect(feedBody.children[0].firstElementChild).toHaveClass('entry');
            done();
        })
    })
    
    describe('New Feed Selection',function(){})     
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
