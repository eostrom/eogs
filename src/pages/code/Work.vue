<template>
  <code-grid>
    <h1>:work</h1>

    <h2>
      I work with clients to make things happen on the&nbsp;web.
    </h2>

    <p>
      Usually that means creating a web application, but sometimes it's a simple
      web site, or a desktop app, or just telling them how to do what they need
      with Google Forms. Not everyone needs the same things. Part of my job is
      figuring that&nbsp;out.
    </p>

    <p>
      I've worked with large corporations, but my typical client is a startup,
      or a nonprofit, or a solo entrepreneur with a great&nbsp;idea.
    </p>

    <h2>
      Sometimes I make things that look like&nbsp;this.
    </h2>

    <div class="samples">
      <g-image
        class="sample"
        src="~/assets/code/work/data-dashboard.png"
        width="200"
        height="140"
        title="Data visualization!"
      />
      <g-image
        class="sample"
        src="~/assets/code/work/data-wheel.png"
        width="200"
        height="140"
        title="More data, visualized!"
      />
      <g-image
        class="sample"
        src="~/assets/code/work/notebook.png"
        width="200"
        height="140"
        title="An old blog I designed."
      />
      <g-image
        class="sample"
        src="~/assets/code/work/studiocal.png"
        width="200"
        height="140"
        title="Time management."
      />
      <g-image
        class="sample"
        src="~/assets/code/work/one-brain.png"
        width="200"
        height="140"
        title="I know, right?"
      />
    </div>

    <h2>
      Some things aren't for looking&nbsp;at.
    </h2>

    <p>
      Reliable code, efficient performance, and maintainability aren't easy to
      show on a web page, but they're important&nbsp;too.
    </p>

    <h2>Let's talk.</h2>

    <p>
      <a href="mailto:code@erikostrom.com">Email me</a> or visit
      <g-link to="/code/links">my links page.</g-link>
    </p>
  </code-grid>
</template>

<script>
</script>

<style scoped>
.samples {
  --sample-spacing: 0.5em;
  --sample-width: 200px;
  --sample-max-across: 3;

  display: flex;
  flex-wrap: wrap;
  max-width: calc(
    (var(--sample-width) * var(--sample-max-across)) +
      (var(--sample-spacing) * (var(--sample-max-across) * 2 + 2))
  );
  justify-content: flex-end;
  margin: 0 calc(0px - var(--sample-spacing));
}

.sample {
  margin: var(--sample-spacing);
}
</style>
