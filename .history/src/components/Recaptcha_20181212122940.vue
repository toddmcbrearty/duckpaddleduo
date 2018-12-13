<script>
grecaptcha.ready(function() {
  grecaptcha
    .execute("6LdvyYAUAAAAAFXRROVEwa-dyUcGq0d_6y-A5qV-", {
      action: "action_name"
    })
    .then(function(token) {
      // Verify the token on the server.
    });
});
</script>
