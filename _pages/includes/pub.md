<section class="content-section" id="reports" aria-labelledby="reports-title">
  <div class="section-heading"><h2 id="reports-title">Technical Reports</h2></div>
  <div class="report-list">
    {% for report in site.data.reports %}
    <article class="report{% if report.featured %} report-featured{% endif %}" id="report-{{ report.id }}">
      {% include research-figure.html id=report.id name=report.short_name %}
      <div class="report-content">
        <h3><a href="{{ report.links.first.url }}">{{ report.title }}</a></h3>
        {% if report.id == 'ui-tars' %}
        <details class="report-authors"><summary>Authors, including <strong>Shijue Huang</strong></summary><p class="authors">{{ report.authors }}</p></details>
        {% else %}<p class="authors">{{ report.authors }}</p>{% endif %}
        <p class="work-meta">Technical Report, {{ report.date }}</p>
        <div class="work-links" aria-label="{{ report.short_name }} resources">
          {% for link in report.links %}<a href="{{ link.url }}">[{{ link.label }}]</a>{% endfor %}
        </div>
        <p class="report-summary">{{ report.summary }}</p>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="content-section" id="publications" aria-labelledby="publications-title">
  <div class="section-heading"><h2 id="publications-title">Selected Publications</h2><a class="section-aside" href="{{ site.author.googlescholar }}">[Full List]</a></div>
  <p class="section-intro">* Equal contribution.</p>
  <div class="publication-list">
    {% assign selected_papers = site.data.publications | where: 'lead', true %}
    {% for paper in selected_papers %}
    {% include publication.html paper=paper %}
    {% endfor %}
  </div>
  <div class="other-publications" id="other-publications">
    <h3 class="subsection-title">More Publications</h3>
    {% assign other_papers = site.data.publications | where: 'lead', false %}
    {% for paper in other_papers %}
    {% if paper.id == 'agentvista' %}{% include publication.html paper=paper %}{% endif %}
    {% endfor %}
    {% for paper in other_papers %}
    {% if paper.venue == 'ICLR 2026' %}{% include publication.html paper=paper %}{% endif %}
    {% endfor %}
    {% for paper in other_papers %}
    {% unless paper.id == 'agentvista' or paper.venue == 'ICLR 2026' %}{% include publication.html paper=paper %}{% endunless %}
    {% endfor %}
  </div>
</section>
