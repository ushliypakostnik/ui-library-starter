<template>
  <div class="datepicker">
    <div class="panels-choices" v-if="availablePanels.length > 1">
      <div
        class="panels-button"
        v-for="(panel, index) in availablePanels"
        :key="`panel${index}`"
        :class="{ 'is-current': panel === currentPanel }"
        @click="currentPanel = panel"
      >
        {{ dictionnaries.panels[panel] }}
      </div>
    </div>

    <div class="preset-ranges" v-if="isPresetPicker && presets.length > 1">
      <div
        class="preset"
        v-for="(entry, index) in availablePresets"
        :key="`preset${index}`"
      >
        <input type="radio" v-model="preset" :id="entry" :value="entry" />
        <label :for="entry">
          <span class="check" />
          <span>{{ dictionnaries.presets[entry] }}</span>
        </label>
      </div>
    </div>

    <div
      class="calendar"
      :class="weekSelector ? 'calendar-week' : 'calendar-days'"
      v-if="isDaysPicker"
    >
      <div class="calendar-header">
        <div
          class="calendar-previous-month calendar-arrow calendar-arrow-previous"
          :aria-label="dictionnaries.previousMonth"
          @click="changeMonth(1)"
        >
          <Icon name="left" />
        </div>
        <div class="calendar-month-name">
          {{ currentMonthName }}
        </div>
        <div
          class="calendar-previous-month calendar-arrow calendar-arrow-next"
          :aria-label="dictionnaries.nextMonth"
          @click="changeMonth(-1)"
        >
          <Icon name="right" />
        </div>
      </div>
      <div class="calendar-days-name">
        <div class="day" v-for="(day, index) in firstWeek" :key="`day${index}`">
          <span>
            {{ day.name }}
          </span>
        </div>
      </div>
      <div class="calendar-days">
        <div
          class="day"
          v-for="day in monthDays"
          :key="day.date | date('DDMMYYYY')"
          :class="dayClasses(day)"
          @click="selectDay(day.date)"
          @mouseover="hoverizeDay(day.date)"
          @mouseleave="hoverRange = []"
        >
          <span>{{ day.date | date('D') }}</span>
        </div>
      </div>
    </div>

    <div class="calendar" v-if="isMonthsPicker">
      <div class="calendar-header">
        <div
          class="calendar-previous-month calendar-arrow calendar-arrow-previous"
          :aria-label="dictionnaries.previousYear"
          @click="changeYear(1)"
        >
          <Icon name="left" />
        </div>
        <div class="calendar-month-name">
          {{ currentYearName }}
        </div>
        <div
          class="calendar-previous-month calendar-arrow calendar-arrow-next"
          :aria-label="dictionnaries.nextYear"
          @click="changeYear(-1)"
        >
          <Icon name="right" />
        </div>
      </div>
      <div class="calendar-months" v-if="isMonthsPanel">
        <div
          class="month"
          v-for="month in yearMonths"
          :key="month.date | date('DDMMYYYY')"
          :class="monthClasses(month)"
          @click="selectMonth(month)"
          @mouseover="hoverizeMonth(month.date)"
          @mouseleave="hoverRange = []"
        >
          <span>
            {{ month.displayDate }}
          </span>
        </div>
      </div>
      <div class="calendar-quarters" v-if="isQuartersPanel">
        <div
          class="quarter"
          v-for="(quarter, index) in yearQuarters"
          :key="`quarter${index}`"
          :class="quarterClasses(quarter)"
          @click="selectQuarter(quarter)"
          @mouseover="hoverizeQuarter(quarter.range.start, quarter.range.end)"
          @mouseleave="hoverRange = []"
        >
          <div class="legend">{{ dictionnaries.quarter }} {{ ++index }}</div>
          <div class="months">
            <div
              class="month"
              v-for="(month, index) in quarter.months"
              :key="`month${index}`"
            >
              <span>
                {{ month.displayDate }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="calendar" v-if="isYearPicker">
      <div class="calendar-years">
        <div
          class="year"
          v-for="(year, index) in years"
          :key="`year${index}`"
          :class="yearClasses(year)"
          @click="selectYear(year)"
          @mouseover="hoverizeYear(year)"
          @mouseleave="hoverRange = []"
        >
          <span>
            {{ year.displayDate }}
          </span>
        </div>
      </div>
    </div>

    <div class="datepicker-controls" v-if="showControls">
      <div class="datepicker-button datepicker-reset" @click="reset">
        {{ resetLegend }}
      </div>
      <div
        class="datepicker-button datepicker-submit"
        @click="update"
        :class="{ 'is-disabled': !(values.from && values.to) }"
      >
        {{ submitLegend }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from '../../../node_modules/moment/moment';
import { dateFilter } from '../../../node_modules/vue-date-fns/src/index';
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInDays,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isValid,
  isWithinRange,
  parse,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subWeeks,
  subYears,
} from 'date-fns';

import Icon from '../Icon/Icon';

const LOCALES = {
  ru: {
    reset: 'Сбросить',
    submit: 'Применить',
    previousMonth: 'Предыдущий месяц',
    nextMonth: 'Следующий месяц',
    previousYear: 'Предыдущий год',
    nextYear: 'Следующий год',
    quarter: 'Квартал',
    panels: {
      days: 'Дни',
      weeks: 'Недели',
      months: 'Месяцы',
      quarters: 'Кварталы',
      years: 'Года',
      day: 'День',
      week: 'Неделя',
      month: 'Месяц',
      quarter: 'Квартал',
      year: 'Год',
    },
    presets: {
      custom: 'Пользовательский диапазон',
      forever: 'С начала',
      last7days: 'Последние 7 дней',
      last30days: 'Последние 30 дней',
      last90days: 'Последние 90 дней',
      last365days: 'Последние 365 дней',
      next365days: 'Следующие 365 дней',
      next90days: 'Следующие 90 дней',
      next30days: 'Следующие 30 дней',
      next7days: 'Следующие 7 дней',
      today: 'Сегодня',
      tomorrow: 'Завтра',
      yesterday: 'Вчера',
    },
  },
};

const locales = {
  ru: require('date-fns/locale/ru'),
};

const RANGE_PANELS = ['days', 'weeks', 'months', 'quarters', 'years'];
const SINGLE_PANELS = ['day'];

const FULL_ISO_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
const UNIX_FORMAT = 'X';

export default {
  name: 'Datepicker',

  filters: {
    date: dateFilter,
  },

  components: {
    Icon,
  },

  props: {
    range: {
      type: Boolean,
      default: true,
    },
    locale: {
      type: String,
      default: 'ru',
    },
    past: {
      type: Boolean,
      default: true,
    },
    future: {
      type: Boolean,
      default: true,
    },
    showControls: {
      type: Boolean,
      default: false,
    },
    panel: {
      type: String,
      default: null,
    },
    yearsCount: {
      type: Number,
      default: 2,
    },
    yearsPast: {
      type: Number,
      default: null,
    },
    yearsFuture: {
      type: Number,
      default: null,
    },
    allowFrom: {
      type: [Number, String],
      default: null,
    },
    allowTo: {
      type: [Number, String],
      default: null,
    },
    unixtime: {
      type: Boolean,
      default: true,
    },
    resetTitle: {
      type: String,
      default: null,
    },
    submitTitle: {
      type: String,
      default: null,
    },
    presets: {
      type: Array,
      default: () => [
        'today',
        'yesterday',
        'last7days',
        'last30days',
        'last90days',
        'last365days',
        'custom',
      ],
    },
  },

  data() {
    return {
      currentPanel: null,
      current: null,
      weekSelector: false,
      isWeeksRangeOpen: false,
      isMonthsRangeOpen: false,
      isQuartersRangeOpen: false,
      isYearsRangeOpen: false,
      monthDays: [],
      now: new Date().toISOString(),
      start: null,
      end: null,
      values: {
        from: null,
        to: null,
      },
      hoverRange: [],
      preset: 'custom',
      aFrom: null,
      aTo: null,
    };
  },

  created() {
    // Parse Inputs
    Object.keys(this.values).forEach((value) => {
      this.values[value] = isValid(parse(this[value])) ? this[value] : null;
    });

    // Display current month or "to" month
    this.current = this.values.to ? this.values.to : this.now;

    // Update Calendar
    this.updateCalendar();

    this.start = startOfYear(this.years[0].date);
    this.end = endOfYear(this.years[this.years.length - 1].date);

    // Set current panel
    if (this.range && this.panel && RANGE_PANELS.includes(this.panel)) {
      this.currentPanel = this.panel || this.availablePanels[0];
    } else {
      this.currentPanel = this.availablePanels[0];
    }

    if (!this.unixtime) {
      this.aFrom = this.allowFrom;
      this.aTo = this.allowTo;
    } else {
      this.aFrom = moment(this.allowFrom, UNIX_FORMAT).format();
      this.aTo = moment(this.allowTo, UNIX_FORMAT).format();
    }
  },

  computed: {
    dictionnaries() {
      return LOCALES[this.locale];
    },

    availablePanels() {
      if (this.range) {
        return RANGE_PANELS;
      }
      return SINGLE_PANELS;
    },

    availablePresets() {
      return this.presets;
    },

    resetLegend() {
      return this.resetTitle ? this.resetTitle : this.dictionnaries.reset;
    },

    submitLegend() {
      return this.submitTitle ? this.submitTitle : this.dictionnaries.submit;
    },

    firstWeek() {
      const days = this.monthDays.slice(0, 7);
      const week = [];
      for (const day of days) {
        week.push({
          name: format(day.date, 'dd', { locale: locales[this.locale] }),
        });
      }
      return week;
    },

    yearMonths() {
      const months = [];
      let month = startOfYear(this.current);

      while (months.length !== 12) {
        const isMonthAllowed = this.isRangeAllowed([
          startOfMonth(month),
          endOfMonth(month),
        ]);
        const str1 = format(month, 'MMMM', { locale: locales[this.locale] });
        const str2 = str1[0].toUpperCase() + str1.slice(1);

        months.push({
          date: month,
          selectable: isMonthAllowed,
          displayDate: str2,
        });
        month = addMonths(month, 1);
      }
      return months;
    },

    yearQuarters() {
      const quarters = [];
      for (const [index] of this.yearMonths.entries()) {
        if (index % 3 === 0) {
          const isQuarterAllowed = this.isRangeAllowed([
            startOfMonth(this.yearMonths[index].date),
            endOfMonth(this.yearMonths[index + 2].date),
          ]);

          quarters.push({
            months: [
              this.yearMonths[index],
              this.yearMonths[index + 1],
              this.yearMonths[index + 2],
            ],
            selectable: isQuarterAllowed,
            range: {
              start: startOfDay(startOfMonth(this.yearMonths[index].date)),
              end: endOfDay(endOfMonth(this.yearMonths[index + 2].date)),
            },
          });
        }
      }
      return quarters;
    },

    years() {
      const years = [];
      const futureCount = this.yearsFuture ? this.yearsFuture : this.yearsCount;
      const pastCount = this.yearsPast ? this.yearsPast : this.yearsCount;
      let i = +this.future * futureCount + +this.past * pastCount + 1;
      let start = this.future ? addYears(this.now, futureCount) : this.now;

      while (i !== 0) {
        const isYearAllowed = this.isRangeAllowed([
          startOfYear(start),
          endOfYear(start),
        ]);

        years.push({
          date: start,
          selectable: isYearAllowed,
          displayDate: format(start, 'YYYY', { locale: locales[this.locale] }),
        });
        start = subYears(start, 1);
        i = i - 1;
      }
      return years.reverse();
    },

    currentMonthName() {
      return format(this.current, 'MMMM YYYY', {
        locale: locales[this.locale],
      });
    },

    currentYearName() {
      return format(this.current, 'YYYY', { locale: locales[this.locale] });
    },

    isPresetPicker() {
      return this.currentPanel === 'days';
    },

    isDaysPicker() {
      return (
        this.currentPanel === 'days' ||
        this.currentPanel === 'weeks' ||
        this.currentPanel === 'week' ||
        this.currentPanel === 'day'
      );
    },

    isMonthsPicker() {
      return (
        this.currentPanel === 'months' ||
        this.currentPanel === 'month' ||
        this.currentPanel === 'quarter' ||
        this.currentPanel === 'quarters'
      );
    },

    isYearPicker() {
      return this.currentPanel === 'year' || this.currentPanel === 'years';
    },

    isMonthsPanel() {
      return this.currentPanel === 'months' || this.currentPanel === 'month';
    },

    isQuartersPanel() {
      return (
        this.currentPanel === 'quarter' || this.currentPanel === 'quarters'
      );
    },

    formatValues() {
      if (!this.unixtime) {
        return {
          to: format(endOfDay(this.values.to), FULL_ISO_FORMAT),
          from: format(startOfDay(this.values.from), FULL_ISO_FORMAT),
        };
      }
      return {
        to: moment(this.values.from).format(UNIX_FORMAT),
        from: moment(this.values.to).format(UNIX_FORMAT),
      };
    },
  },

  methods: {
    reset() {
      this.values = {
        to: null,
        from: null,
      };
      this.preset = null;
      this.$emit('reset', { to: null, from: null });
    },

    update() {
      if (!this.values.from || !this.values.to) {
        return;
      }

      this.$emit('update', {
        ...this.formatValues,
        panel: this.currentPanel,
      });
    },

    changeMonth(diff) {
      this.current = subMonths(this.current, diff);
      this.updateCalendar();
    },

    changeYear(diff) {
      this.current = subYears(this.current, diff);
      this.updateCalendar();
    },

    selectDay(date) {
      let range;

      // Select weeks
      if (this.weekSelector) {
        if (!this.range) {
          // Select week single
          range = this.getAllowedDatesOfRange([
            startOfWeek(date, { weekStartsOn: 1 }),
            endOfWeek(date, { weekStartsOn: 1 }),
          ]);
          this.values.from = range[0];
          this.values.to = range[range.length - 1];
          return;
        } else {
          // Select weeks range
          this.isMonthsRangeOpen = false;
          this.isQuartersRangeOpen = false;
          this.isYearsRangeOpen = false;
          if (!this.values.from && !this.values.to) {
            range = this.getAllowedDatesOfRange([
              startOfWeek(date, { weekStartsOn: 1 }),
              endOfWeek(date, { weekStartsOn: 1 }),
            ]);
            this.isWeeksRangeOpen = true;
          } else {
            if (isWithinRange(date, this.values.from, this.values.from)) {
              // On selected weeks
              range = this.getAllowedDatesOfRange([
                startOfWeek(date, { weekStartsOn: 1 }),
                endOfWeek(date, { weekStartsOn: 1 }),
              ]);
            } else if (isBefore(date, this.values.from)) {
              // Before selected weeks
              range = this.getAllowedDatesOfRange([
                startOfWeek(date, { weekStartsOn: 1 }),
                endOfWeek(date, { weekStartsOn: 1 }),
              ]);
              this.isWeeksRangeOpen = true;
            } else {
              // After selected weeks
              if (this.isWeeksRangeOpen) {
                range = this.getAllowedDatesOfRange([
                  this.values.from,
                  endOfWeek(date, { weekStartsOn: 1 }),
                ]);
              } else {
                range = this.getAllowedDatesOfRange([
                  startOfWeek(date, { weekStartsOn: 1 }),
                  endOfWeek(date, { weekStartsOn: 1 }),
                ]);
              }
              this.isWeeksRangeOpen = !this.isWeeksRangeOpen;
            }
          }
          this.values.from = range[0];
          this.values.to = range[range.length - 1];
          this.preset = 'custom';
          return;
        }
      }

      // Select days
      if (!this.range) {
        // Select day single
        this.values.from = startOfDay(date);
        this.values.to = startOfDay(date);
        return;
      } else {
        // Select days range
        this.isWeeksRangeOpen = false;
        this.isMonthsRangeOpen = false;
        this.isQuartersRangeOpen = false;
        this.isYearsRangeOpen = false;
        if (
          (this.values.from && this.values.to) ||
          (!this.values.from && !this.values.to)
        ) {
          this.values.from = date;
          this.values.to = null;
        } else if (this.values.from && !this.values.to) {
          if (isBefore(date, this.values.from)) {
            this.values.from = date;
          } else {
            this.values.to = date;
            this.hoverRange = [];
          }
        }
        this.preset = 'custom';
      }
    },

    selectMonth(month) {
      let range;

      if (!this.range) {
        // Select month single
        range = this.getAllowedDatesOfRange([
          startOfMonth(month.date),
          endOfMonth(month.date),
        ]);
        this.values.from = range[0];
        this.values.to = range[range.length - 1];
        this.current = this.values.to;
        return;
      } else {
        // Select months range
        this.isWeeksRangeOpen = false;
        this.isQuartersRangeOpen = false;
        this.isYearsRangeOpen = false;
        if (
          (!this.values.from && !this.values.to) ||
          (this.values.from && !this.values.to)
        ) {
          range = this.getAllowedDatesOfRange([
            startOfMonth(month.date),
            endOfMonth(month.date),
          ]);
          this.current = this.values.to;
          this.isMonthsRangeOpen = true;
        } else {
          if (isWithinRange(month.date, this.values.from, this.values.to)) {
            // On selected months
            if (!this.isMonthsRangeOpen) {
              range = this.getAllowedDatesOfRange([
                startOfMonth(month.date),
                endOfMonth(month.date),
              ]);
            } else {
              range = this.getAllowedDatesOfRange([
                this.values.from,
                endOfMonth(month.date),
              ]);
            }
            this.isMonthsRangeOpen = !this.isMonthsRangeOpen;
          } else if (isBefore(month.date, this.values.from)) {
            // Before selected months
            range = this.getAllowedDatesOfRange([
              startOfMonth(month.date),
              endOfMonth(month.date),
            ]);
            this.isMonthsRangeOpen = true;
          } else {
            // After selected months
            if (this.isMonthsRangeOpen) {
              range = this.getAllowedDatesOfRange([
                this.values.from,
                endOfMonth(month.date),
              ]);
            } else {
              range = this.getAllowedDatesOfRange([
                startOfMonth(month.date),
                endOfMonth(month.date),
              ]);
            }
            this.isMonthsRangeOpen = !this.isMonthsRangeOpen;
          }
        }
        this.values.from = range[0];
        this.values.to = range[range.length - 1];
        this.current = this.values.to;
        this.preset = 'custom';
      }
    },

    selectQuarter(quarter) {
      let range;

      if (!this.range) {
        // Select quarter single
        range = this.getAllowedDatesOfRange([
          startOfDay(startOfMonth(quarter.range.start)),
          endOfMonth(quarter.range.end),
        ]);
        this.values.from = range[0];
        this.values.to = range[range.length - 1];
        this.current = this.values.to;
        return;
      } else {
        // Select quarters range
        this.isWeeksRangeOpen = false;
        this.isMonthsRangeOpen = false;
        this.isYearsRangeOpen = false;
        if (
          (!this.values.from && !this.values.to) ||
          (this.values.from && !this.values.to)
        ) {
          range = this.getAllowedDatesOfRange([
            startOfDay(startOfMonth(quarter.range.start)),
            endOfMonth(quarter.range.end),
          ]);
          this.isQuartersRangeOpen = true;
        } else {
          if (
            isWithinRange(quarter.range.start, this.values.from, this.values.to)
          ) {
            // On selected quarters
            if (!this.isQuartersRangeOpen) {
              range = this.getAllowedDatesOfRange([
                startOfDay(startOfMonth(quarter.range.start)),
                endOfMonth(quarter.range.end),
              ]);
            } else {
              range = this.getAllowedDatesOfRange([
                this.values.from,
                endOfMonth(quarter.range.end),
              ]);
            }
            this.isQuartersRangeOpen = !this.isQuartersRangeOpen;
          } else if (isBefore(quarter.range.start, this.values.from)) {
            // Before selected quarters
            range = this.getAllowedDatesOfRange([
              startOfDay(startOfMonth(quarter.range.start)),
              endOfMonth(quarter.range.end),
            ]);
            this.isQuartersRangeOpen = true;
          } else {
            // After selected quarters
            if (this.isQuartersRangeOpen) {
              range = this.getAllowedDatesOfRange([
                this.values.from,
                endOfMonth(quarter.range.end),
              ]);
            } else {
              range = this.getAllowedDatesOfRange([
                startOfDay(startOfMonth(quarter.range.start)),
                endOfMonth(quarter.range.end),
              ]);
            }
            this.isQuartersRangeOpen = !this.isQuartersRangeOpen;
          }
        }
        this.values.from = range[0];
        this.values.to = range[range.length - 1];
        this.current = this.values.to;
        this.preset = 'custom';
      }
    },

    selectYear(year) {
      let range;

      if (!this.range) {
        // Select year single
        range = this.getAllowedDatesOfRange([
          startOfYear(year.date),
          endOfYear(year.date),
        ]);
        this.values.from = range[0];
        this.values.to = range[range.length - 1];
        this.current = this.values.to;
        return;
      } else {
        // Select years range
        this.isWeeksRangeOpen = false;
        this.isMonthsRangeOpen = false;
        this.isQuartersRangeOpen = false;
        if (
          (!this.values.from && !this.values.to) ||
          (this.values.from && !this.values.to)
        ) {
          range = this.getAllowedDatesOfRange([
            startOfYear(year.date),
            endOfYear(year.date),
          ]);
          this.isYearsRangeOpen = true;
        } else {
          if (isWithinRange(year.date, this.values.from, this.values.to)) {
            // On selected years
            if (!this.isYearsRangeOpen) {
              range = this.getAllowedDatesOfRange([
                startOfYear(year.date),
                endOfYear(year.date),
              ]);
            } else {
              range = this.getAllowedDatesOfRange([
                this.values.from,
                endOfYear(year.date),
              ]);
            }
            this.isYearsRangeOpen = !this.isYearsRangeOpen;
          } else if (isBefore(startOfYear(year.date), this.values.from)) {
            // Before selected years
            range = this.getAllowedDatesOfRange([
              startOfYear(year.date),
              endOfYear(year.date),
            ]);
            this.isYearsRangeOpen = true;
          } else {
            // After selected years
            if (this.isYearsRangeOpen) {
              range = this.getAllowedDatesOfRange([
                this.values.from,
                endOfYear(year.date),
              ]);
            } else {
              range = this.getAllowedDatesOfRange([
                startOfYear(year.date),
                endOfYear(year.date),
              ]);
            }
            this.isYearsRangeOpen = !this.isYearsRangeOpen;
          }
        }
        this.values.from = range[0];
        this.values.to = range[range.length - 1];
        this.current = this.values.to;
        this.preset = 'custom';
      }
    },

    hoverizeDay(date) {
      if (
        !this.weekSelector &&
        (!(this.values.from && !this.values.to) ||
          isBefore(date, this.values.from))
      ) {
        this.hoverRange = [];
        return;
      }
      if (this.weekSelector) {
        let availableRange = [];

        if (this.range) {
          if (
            (!this.values.from && !this.values.to) ||
            (this.values.from && !this.values.to)
          ) {
            availableRange = this.getAllowedDatesOfRange([
              startOfWeek(date, { weekStartsOn: 1 }),
              endOfWeek(date, { weekStartsOn: 1 }),
            ]);
          } else {
            if (isBefore(date, this.values.from)) {
              availableRange = this.getAllowedDatesOfRange([
                startOfWeek(date, { weekStartsOn: 1 }),
                endOfWeek(date, { weekStartsOn: 1 }),
              ]);
            } else {
              if (this.isWeeksRangeOpen) {
                availableRange = this.getAllowedDatesOfRange([
                  startOfWeek(this.values.from, { weekStartsOn: 1 }),
                  endOfWeek(date, { weekStartsOn: 1 }),
                ]);
              } else {
                availableRange = this.getAllowedDatesOfRange([
                  startOfWeek(date, { weekStartsOn: 1 }),
                  endOfWeek(date, { weekStartsOn: 1 }),
                ]);
              }
            }
          }
        } else {
          availableRange = this.getAllowedDatesOfRange([
            startOfWeek(date, { weekStartsOn: 1 }),
            endOfWeek(date, { weekStartsOn: 1 }),
          ]);
        }
        this.hoverRange = [
          availableRange[0],
          availableRange[availableRange.length - 1],
        ];
      } else {
        this.hoverRange = [this.values.from, date];
      }
    },

    hoverizeMonth(date) {
      if (
        this.range &&
        !isBefore(date, this.values.from) &&
        this.isMonthsRangeOpen
      ) {
        this.hoverRange = [startOfMonth(this.values.from), endOfMonth(date)];
        return;
      } else {
        this.hoverRange = [];
      }
    },

    hoverizeQuarter(start, end) {
      if (
        this.range &&
        !isBefore(start, this.values.from) &&
        this.isQuartersRangeOpen
      ) {
        this.hoverRange = [this.values.from, end];
        return;
      } else {
        this.hoverRange = [];
      }
    },

    hoverizeYear(year) {
      if (
        this.range &&
        !isBefore(startOfYear(year.date), this.values.from) &&
        this.isYearsRangeOpen
      ) {
        this.hoverRange = [this.values.from, endOfYear(year.date)];
        return;
      } else {
        this.hoverRange = [];
      }
    },

    updateCalendar() {
      const days = [];

      const lastDayOfMonth = endOfMonth(this.current);
      const firstDayOfMonth = startOfMonth(this.current);
      let nbDaysLastMonth = (+format(firstDayOfMonth, 'd') - 1) % 7;
      nbDaysLastMonth = nbDaysLastMonth === -1 ? 6 : nbDaysLastMonth;

      let day = subDays(firstDayOfMonth, nbDaysLastMonth);

      while (isBefore(day, lastDayOfMonth) || days.length % 7 > 0) {
        const isAllowedByFutureAndPast =
          this.future && isAfter(day, this.now)
            ? true
            : false || (this.past && isBefore(day, this.now))
            ? true
            : false || isSameDay(day, this.now);
        const isAllowedByAllowedProps = this.isDateAllowed(day);
        days.push({
          date: day,
          selectable: isAllowedByFutureAndPast && isAllowedByAllowedProps,
          currentMonth: isSameMonth(this.current, day),
        });
        day = addDays(day, 1);
      }
      this.monthDays = days;
    },

    dayClasses(day) {
      const classes = [];

      if (day.currentMonth) {
        classes.push('is-current-month');
      }
      if (
        this.values.from &&
        this.values.to &&
        isWithinRange(day.date, this.values.from, this.values.to)
      ) {
        classes.push('is-selected');
      }
      if (!day.selectable) {
        classes.push('is-disabled');
      }
      if (isSameDay(day.date, this.now)) {
        classes.push('is-today');
      }
      if (
        (!this.values.to && isSameDay(day.date, this.values.from)) ||
        (this.values.to &&
          !this.values.from &&
          isSameDay(day.date, this.values.from) &&
          isSameDay(day.date, this.values.to)) ||
        (this.values.to &&
          this.values.from &&
          isSameDay(day.date, this.values.from))
      ) {
        classes.push('is-first-range');
        classes.push('is-edge-range');
      }
      if (this.values.to && isSameDay(day.date, this.values.to)) {
        classes.push('is-last-range');
        classes.push('is-edge-range');
      }
      if (
        this.hoverRange.length === 2 &&
        isWithinRange(day.date, this.hoverRange[0], this.hoverRange[1])
      ) {
        classes.push('is-in-range');
      }
      return classes;
    },

    monthClasses(month) {
      const classes = [];

      if (!month.selectable) {
        classes.push('is-disabled');
      }
      if (
        this.values.from &&
        this.values.to &&
        this.isWithinRangeCustom(
          startOfMonth(month.date),
          endOfMonth(month.date),
          this.values.from,
          this.values.to,
        )
      ) {
        classes.push('is-selected');
      }
      if (
        this.hoverRange.length === 2 &&
        isWithinRange(month.date, this.hoverRange[0], this.hoverRange[1])
      ) {
        classes.push('is-in-range');
      }
      return classes;
    },

    quarterClasses(quarter) {
      const classes = [];

      if (!quarter.selectable) {
        classes.push('is-disabled');
      }
      if (
        this.values.from &&
        this.values.to &&
        this.isWithinRangeCustom(
          quarter.range.start,
          quarter.range.end,
          this.values.from,
          this.values.to,
        )
      ) {
        classes.push('is-selected');
      }
      if (
        this.hoverRange.length === 2 &&
        isWithinRange(
          quarter.months[1].date,
          this.hoverRange[0],
          this.hoverRange[1],
        )
      ) {
        classes.push('is-in-range');
      }
      return classes;
    },

    yearClasses(year) {
      const classes = [];

      if (!year.selectable) {
        classes.push('is-disabled');
      }
      if (
        this.values.from &&
        this.values.to &&
        this.isWithinRangeCustom(
          startOfYear(year.date),
          endOfYear(year.date),
          this.values.from,
          this.values.to,
        )
      ) {
        classes.push('is-selected');
      }
      if (
        this.hoverRange.length === 2 &&
        isWithinRange(year.date, this.hoverRange[0], this.hoverRange[1])
      ) {
        classes.push('is-in-range');
      }
      return classes;
    },

    isDateAllowed(date) {
      let isAllowed = true;

      if (this.aFrom) {
        isAllowed = isAllowed && !isBefore(date, parse(this.aFrom));
      }
      if (this.aTo) {
        isAllowed = isAllowed && !isAfter(date, parse(this.aTo));
      }
      return isAllowed;
    },

    isWithinRangeCustom(from, to, start, end) {
      return (
        isWithinRange(from, start, end) ||
        isWithinRange(to, start, end) ||
        (isBefore(from, start) && isAfter(to, end))
      );
    },

    isRangeAllowed([from, to]) {
      let rangeFrom;
      let rangeTo;

      if (!this.past) {
        rangeFrom = subDays(this.now, 1);
      } else if (this.aFrom) {
        rangeFrom = this.aFrom;
      } else {
        rangeFrom = this.start;
      }
      if (!this.future) {
        rangeTo = addDays(this.now, 1);
      } else if (this.aTo) {
        rangeTo = this.aTo;
      } else {
        rangeFrom = this.end;
      }
      return (
        isWithinRange(from, rangeFrom, rangeTo) ||
        isWithinRange(to, rangeFrom, rangeTo) ||
        (isBefore(from, rangeFrom) && isAfter(to, rangeTo))
      );
    },

    getAllowedDatesOfRange([from, to]) {
      const distance = differenceInDays(to, from);

      return new Array(distance + 1)
        .fill(null)
        .map((_, index) => addDays(from, index))
        .filter(this.isDateAllowed);
    },
  },

  watch: {
    currentPanel(panel) {
      this.weekSelector = panel === 'week' || panel === 'weeks' ? true : false;
      this.updateCalendar();
    },

    values: {
      handler: function () {
        if (this.values.from && this.values.to) {
          this.$emit('select', {
            ...this.formatValues,
            panel: this.currentPanel,
          });
        }
      },
      deep: true,
    },

    preset(preset) {
      this.current = this.now;
      this.updateCalendar();

      switch (preset) {
        case 'custom':
          this.values = { from: null, to: null };
          break;
        case 'today':
          this.values = { from: startOfDay(this.now), to: this.now };
          break;
        case 'yesterday':
          this.values = {
            from: startOfDay(subDays(this.now, 1)),
            to: endOfDay(subDays(this.now, 1)),
          };
          break;
        case 'tomorrow':
          this.values = {
            from: startOfDay(addDays(this.now, 1)),
            to: endOfDay(addDays(this.now, 1)),
          };
          break;
        case 'last7days':
          this.values = {
            from: startOfDay(subWeeks(this.now, 1)),
            to: this.now,
          };
          break;
        case 'next7days':
          this.values = {
            to: startOfDay(addWeeks(this.now, 1)),
            from: this.now,
          };
          break;
        case 'last30days':
          this.values = {
            from: startOfDay(subMonths(this.now, 1)),
            to: this.now,
          };
          break;
        case 'next30days':
          this.values = {
            to: startOfDay(addMonths(this.now, 1)),
            from: this.now,
          };
          break;
        case 'last90days':
          this.values = {
            from: startOfDay(subMonths(this.now, 3)),
            to: this.now,
          };
          break;
        case 'next90days':
          this.values = {
            to: startOfDay(addMonths(this.now, 3)),
            from: this.now,
          };
          break;
        case 'last365days':
          this.values = {
            from: startOfDay(subYears(this.now, 1)),
            to: this.now,
          };
          break;
        case 'next365days':
          this.values = {
            to: startOfDay(addYears(this.now, 1)),
            from: this.now,
          };
          break;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$width = 400px
$range-color = rgba($colors.bird, $opacites.psy)

.datepicker
  text-align left
  height auto
  min-width $width
  max-width $width
  width $width
  user-select none
  border none
  border-radius 0

  & *
    box-sizing border-box

  .panels-choices
    display grid
    grid-template-columns repeat(5, minmax(max-content, max-content))
    gap 5%
    border none
    border-radius 0
    padding: $gutter / 2 $gutter / 4 0 28px

    .panels-button
      position relative
      display inline-flex
      align-items center
      justify-content left
      height 32px
      padding 0 0 15px 0
      border-radius 0
      cursor pointer
      background none
      $text("alena")

      &.is-current,
      &:hover
        color $colors.text

      &.is-current:after
        content ""
        background $colors.primary
        position absolute
        bottom 0
        left 0
        right 0
        border-radius $border-radiuses.dancing
        width 100%
        height 6px

  // Кнопки Сбросить/Применить - не использовалось, поэтому не проработано полностью под стиль!
  &-controls
    display none
    border-radius 0
    margin-top 10px
    display flex
    align-items center
    justify-content space-between
    border none
    border-top 1px solid $colors.sky
    padding: 20px

    .datepicker-button
      height 36px
      min-width 150px
      padding 5px
      display inline-flex
      flex-grow 1
      align-items center
      justify-content center
      border-radius 4px
      font-size 12px

      & + .datepicker-button
        margin-left 10px

      &:not(.is-disabled)
        cursor pointer

  &-submit
    background-color $colors.primary
    color $colors.stone

    &.is-disabled
      opacity $opacites.pop
      cursor not-allowed
      pointer-events none

  // &-reset
  // Не использовалось, поэтому не проработано под стиль!
  // &-reset
  .preset-ranges
    padding 20px
    display flex
    display none
    flex-wrap wrap
    border-bottom 1px solid $colors.sky

    .preset
      width 50%
      font-size 13px
      height 20px
      cursor pointer
      position relative
      margin 5px 0

      input
        position absolute
        opacity 0
        height 0
        width 0

        &:checked ~ label .check
          background-color $colors.primary

          &::after
            background-color transparent

      label
        display inline-flex
        align-items center

        span + span
          margin-left 10px

        .check
          display block
          position relative
          height 20px
          width 20px
          background-color $colors.secondary
          border-radius $border-radiuses.shooting

          &::after
            content ""
            position absolute
            height 10px
            width 10px
            left 50%
            top 50%
            background-color $colors.stone
            border-radius 100%
            border 3px solid $colors.stone
            transform translateX(-50%) translateY(-50%)

      *
        cursor: pointer

.calendar
  color $colors.ball
  background-color $colors.stone

  &,
  .calendar-days .day.is-edge-range,
  .calendar-days .day.is-selected,
  .calendar-months .month:not(.is-disabled),
  .calendar-quarters .quarter .months .month,
  .calendar-years .year:not(.is-disabled)
    color $colors.text

  .calendar-header
    padding-top 10px
    display flex
    justify-content space-between
    align-items center

    .calendar-month-name
      flex 1
      text-align center
      $text("katya")

    .calendar-arrow
      fill $colors.secondary
      cursor pointer

      &:hover
        fill $color_text

// &.calendar-arrow-next
// &.calendar-arrow-previous

.calendar-months
  padding-top 10px
  display grid
  gap 10px 10px
  grid-template-columns 1fr 1fr 1fr

  .month
    height 50px
    padding 10px
    display inline-flex
    align-items center
    border 1px solid $colors.sky
    border-radius: $border-radiuses.swimming
    font-size 13px

    &:hover
      background-color $range-color

    &.is-disabled
      cursor not-allowed
      opacity 0.33
      pointer-events none

    &.is-in-range
      background-color $range-color

    &.is-selected
      background-color $colors.primary

    &:not(.is-disabled)
      cursor pointer

.calendar-quarters
  padding-top 10px

  .quarter
    position relative
    display block
    margin 10px 0 8px 0

    &:last-child
      margin-bottom 0

    .legend
      position absolute
      top 10px
      padding-left: 21px
      $text("natasha")

    .months
      height auto
      display grid
      gap 10px 10px
      align-items center
      grid-template-columns 1fr 1fr 1fr
      padding: 29px 10px 7px 21px

      &:hover
        background-color: $range-color

      .month
        font-size 10px
        text-align left

    &.is-disabled
      cursor not-allowed
      pointer-events none

      .months,
      .legend
        opacity $opacites.pop

    &.is-in-range
      .months
        background-color $range-color

    &.is-selected .months
      background-color $colors.primary

    &:not(.is-disabled) .months
      cursor pointer

.calendar-years
  padding-top 20px
  display grid
  gap 10px 10px
  grid-template-columns 1fr 1fr

  .year
    height 50px
    padding 10px 10px 10px 21px
    display flex
    align-items center
    margin 10px 0

    &:hover
      background-color $range-color

    &.is-disabled
      cursor not-allowed
      opacity $opacites.pop
      pointer-events none

    &.is-in-range
      background-color $range-color

    &.is-selected
      background-color $colors.primary

    &:not(.is-disabled)
      cursor pointer

.calendar-months .month,
.calendar-quarters .quarter .months,
.calendar-years .year
  border none
  border-radius 0
  justify-content left
  padding-left 21px
  $text("natasha")

.calendar-years .year
  $text("katya")

.calendar-months,
.calendar-quarters,
.calendar-quarters .quarter,
.calendar-years .year
  margin-top 0

.calendar-days-name,
.calendar-days
  .day
    width calc(100% / 7)
    display inline-flex
    align-items center
    justify-content center

.calendar-days-name .day
  color $colors.secondary !important
  height 40px
  $text("natasha")

.calendar-days .day
  height 40px

  &.is-today span
    color $colors.primary

  &:not(.is-current-month)
    color rgba(0, 0, 0, 0.5)

  &:not(.is-current-month)
    color $colors.ball

  &.is-disabled
    cursor not-allowed
    opacity $opacites.pop
    pointer-events none

  &.is-today
    span
      color $colors.secondary
      font-weight bold

  &.is-in-range
    background-color $range-color

  &.is-first-range
    border-top-left-radius $border-radiuses.swimming
    border-bottom-left-radius $border-radiuses.swimming

  &.is-last-range
    border-top-right-radius $border-radiuses.swimming
    border-bottom-right-radius $border-radiuses.swimming

  &.is-edge-range
    background-color $colors.primary

  &.is-selected
    background-color $colors.primary

  &:not(.is-disabled)
    cursor pointer

&.calendar-days
  .calendar-days .day
    &:not(.is-edge-range):hover
      background-color $range-color
</style>
