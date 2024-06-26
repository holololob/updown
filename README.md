# 업다운 게임 만들기

# 요구사항
1. 랜덤숫자 지정
2. 유저가 숫자를 입력하고, GO 버튼을 누른다.
3. 유저가 랜덤숫자를 맞추면, 맞췄다고 표시되어야 한다.
4. 랜덤숫자가 유저숫자보다 작을 경우, down 표시
5. 랜덤숫자가 유저숫자보다 클 경우, up 표시
6. reset 버튼을 누르면 게임이 리셋된다.
7. 5번의 기회를 다 소모하면 게임이 끝난다. (버튼 비활성화, 추측불가)
8. 유저가 1~50 범위 밖의 숫자를 입력하면 알려준다. 이때, 기회를 차감하지 않는다.
9. 유저가 이미 입력한 숫자를 입력하면 알려준다. 이때, 기회를 차감하지 않는다.


# 내가 생각한 구조
필요한 것:
1. 랜덤숫자를 지정하는 함수
2. 유저숫자를 지정된 랜덤숫자와 비교하는 함수
    - n이 r보다 크면 "DOWN" 출력
    - n이 r보다 작으면 "UP" 출력
    - n이 r과 동일하면 "정답" 출력
    - 이 함수는 최대 5회까지 실행되어야 함
    - 중복 입력한 값은 중복값임을 확인 (= 게임 중 입력한 번호를 기억해야 함)
3. Reset 함수


# 실제 함수
1. 랜덤번호를 지정하는 함수 + 실행 함수
2. 유저번호를 지정된 랜덤번호와 비교하는 함수
    - n이 r보다 크면 "DOWN" 출력
    - n이 r보다 작으면 "UP" 출력
    - n이 r과 동일하면 "정답" 출력
    - 5회까지 실행, 횟수 소진 후 GO 버튼 비활성화(게임 중지)
    - 입력값이 중복 입력한 값인 경우 중복값임을 확인(입력값을 배열에 추가하여 비교)
    - (추가) 입력값이 1 미만 50 초과인 경우 진행 X
    
3. Reset 함수

~~4. (추가) 페이지 로드 시 랜덤숫자 생성~~

4. Enter 키 입력 시 input 값 전달 함수