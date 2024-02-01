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
