const formatName = require('../formatFullname');
const expect = require('chai').expect;

describe('formatName', () => {
    it('should return Error if nothing was provided or argument is different than string', () => {
        expect(formatName('')).to.equal('Error');
        expect(formatName(undefined)).to.equal('Error');
        expect(formatName(459239)).to.equal('Error');
        expect(formatName([])).to.equal('Error');
        expect(formatName({})).to.equal('Error');
        expect(formatName(function(){})).to.equal('Error');
    });
    it('should return error if more or less than name and surname was provided', () => {
        expect(formatName('Marcin Łukasz Pytlak')).to.equal('Error');
        expect(formatName('Marcin')).to.equal('Error');
    });
    it('should return correct, edited output', () => {
        expect(formatName('mArcin pYtlak')).to.equal('Marcin Pytlak');
        expect(formatName('MARCIN pytlak')).to.equal('Marcin Pytlak');
    });
});