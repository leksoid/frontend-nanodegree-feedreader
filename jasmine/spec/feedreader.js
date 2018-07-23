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
            loadFeed(0,function(){
                done();
            });
        })
        it('displayed at least one on loadFeed call', function(done){
            expect(feedBody.children.length).toBeGreaterThan(0);
            expect(feedBody.children[0].firstElementChild).toHaveClass('entry');
            done();
        })
    })
    
    describe('New Feed Selection',function(){
        let firstCompare, secondCompare;
        beforeEach(function(done){
            loadFeed(0,function(){
                firstCompare = document.querySelector('.feed').innerHTML;
                loadFeed(1,function(){
                    secondCompare = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        })
        it('updated with new content', function(done){
            expect(firstCompare).not.toBe(secondCompare);
            done();
        })
    })        
}());