<template>
  <div ref="googleLoginBtn" class="btn_google"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const googleLoginBtn = ref(null);
onMounted(() => {
  window.google.accounts.id.initialize({
    client_id: "tu_clave",
    callback: onSuccess,
    context: "signin",
    auto_select: false,
    scope: "",
    referrerPolicy: {
      policy: "strict-origin-when-cross-origin",
    },
  });
  window.google.accounts.id.renderButton(googleLoginBtn.value, {
    text: "signin_with", // or 'signup_with' | 'continue_with' | 'signin'
    size: "large", // or 'small' | 'medium'
    width: "366", // max width 400
    theme: "outline", // or 'filled_black' |  'filled_blue'
    logo_alignment: "center", // or 'center'
  });
});

function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  /* Buffer.from(base64,'base64')
    decodeURIComponent(atob(base64).split('').map(function (c) */
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

async function onSuccess(googleUser) {
  const user = parseJwt(googleUser.credential);
  //console.log(user);

  const a = await fetch("https://localhost:4000/login/", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: user.email }),
  });

  let jwt = await a.json();
  //console.log(jwt.token);

  if (jwt.token) {
    localStorage.setItem("usuario", jwt.token);
    router.push({ name: "Home" });
  } else {
    console.log("exdi");
  }

  /* const name = user.name
    const imgURL = user.picture
    const email = user.email
    const id_token = googleUser.credential */
}
</script>
<style>
.btn_google {
  display: flex;
  justify-content: center;
}
</style>
