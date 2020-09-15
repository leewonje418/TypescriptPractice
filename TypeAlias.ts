type UNIQID = string | null
function getUserID(id: UNIQID) {
    console.log(id);
}
getUserID('dddaadaa');
getUserID('dddaadaa');
//getUserID(12); 라고 하면 오류생김 beacause 12는 자료형이기 때문

type USER_TYPE = 'TESTER' | 'ADMIN'
//let userType: USER_TYPE = 'asdf' 라고 하면 오류가 생김 beacause USER_TYPE의 값은 무조건 'TESTER'아니면 'ADMIN'이여야 되기 때문