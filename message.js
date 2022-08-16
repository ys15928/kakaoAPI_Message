const key = "22c571d2824f18963d82c0525d627769"; //javascript Key

function sendMessage() {
  const selected = document.getElementById("messageId");
  const id = selected.value;
  Kakao.init(key);
  Kakao.Link.sendCustom({
    templateId: parseInt(id),
  });
}
