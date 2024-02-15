/**
[LoginPage]
1. 로그인을 진행한다. (서버에 요청을 한다)
2. 로그인이 성공되면(성공적인 응답이오면)
3. 메인페이지로 이동한다.

[MyNavbar]
1. 로그인
    1. 로그인이 어디선가 완료되면, 
    2. (로그인, 회원가입)을 (로그아웃)으로 변경한다. 
    3. 다시 그린다
2. 로그아웃
    1. 로그아웃이
     클릭되면 (로그아웃)을 (로그인,회원가입)으로 변경한다.
    2. 다시 그린다.

[다른 컴포넌트 - 이를테면 BoardDetail]
1. 현재 게시글이 로그인 된 유저의 게시글이면 수정 버튼이 보이도록 한다.

[다른 컴포넌트 - 이를테면 BoardList]
1. 현재 로그인이 되어있으면 글 작성 버튼이 보이도록 한다.
2. 현재 로그인이 안 되어 있으면 글 작성 버튼이 안 보이도록 한다.

==> 1. 결국 LoginPage에서 발생한 상태변화가 다양한 컴포넌트에 전파되어야 한다.
==> 2. 로그아웃버튼에서 발생한 상태변화가 다양한 컴포넌트에 전파되어야 한다.

*/
