import { storage } from "../lib/storage";
import { saveUsername, getUsername } from "../user";

jest.mock('../lib/storage')

test('first example', ()=> {
    const myMock = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce('hello world').mockReturnValueOnce(5);
    
    const resutl1 = myMock();
    const resutl2 = myMock();
    const resutl3 = myMock();
    myMock();

    expect(myMock).toHaveBeenCalled()
    expect(resutl1).toBe(true)
    expect(resutl2).toBe('hello world')
    expect(resutl3).toBe(5)
})

test('second example', ()=>{
    saveUsername('juan')
    expect(storage.save).toHaveBeenCalled();
    expect(storage.save).toHaveBeenCalledWith({key: 'username', value: 'juan'})
})

test('thirt example', ()=>{
    const username = 'juan'
    storage.get.mockReturnValueOnce(username)
    const result = getUsername()

    expect(result).toBe(username)
    expect(storage.get).toHaveBeenCalled();
    expect(storage.get).toHaveBeenCalledWith({key: 'username', value: 'juan'})
})