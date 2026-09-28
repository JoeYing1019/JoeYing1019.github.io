<section class="content-section news-section" id="news" aria-labelledby="news-title">
  <div class="section-heading"><h2 id="news-title">News</h2></div>
  <ul class="news-list">
    {% for item in site.data.news %}
    <li><span class="news-date">{% if item.date contains '-' %}<time datetime="{{ item.date }}">{{ item.label }}</time>{% else %}{{ item.label }}{% endif %}</span><div>{{ item.text }}</div></li>
    {% endfor %}
  </ul>
</section>
