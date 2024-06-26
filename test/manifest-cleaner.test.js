const fs = require('fs');
const clean = require('../src/remove-duplicate');
const expect = require('chai').expect
const xml = fs.readFileSync(__dirname+'/files/ManifestWithDuplicate.xml').toString().trim();
const normalized =  fs.readFileSync(__dirname+'/files/ManifestWithoutDuplicate.xml').toString().trim();
const filtered =  fs.readFileSync(__dirname+'/files/ManifestWithFilteredPermissions.xml').toString().trim();

describe('cleanManifest', function(){
       it('remove duplicate permissions', function(){
            expect(clean(xml)).to.eq(normalized)
        });

        it('Exlucde permissions', function(){
            expect(clean(xml, ['android.permission.BLUETOOTH'])).to.eq(filtered)
        });
    
});