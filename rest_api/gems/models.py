from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

User = get_user_model()

class Gem(models.Model):
  """
  Pre-defined lookup table containing characteristics of specific Gems;
  e.g., Novice, Champion, Savvy Saver
  """

  class ShapeChoice(models.TextChoices):
    TOP = 'T', _('Top')
    SIDE = 'S', _('Side')

  class ColorChoice(models.TextChoices):
    DARK_GREEN = 'DK', _('Dark Green')
    TEAL = 'TE', _('Teal')
    RED = 'RE', _('Ruby Red')
    INDIGO = 'IN', _('Indigo')
    LIGHT_BLUE = 'LB', _('Light Blue')
    DARK_BLUE = 'DB', _('Dark Blue')
    ORANGE = 'OR', _('Orange')
    LIGHT_GREEN = 'LG', _('Light Green')
    LIGHT_PURPLE = 'LP', _('Light Purple')
    DARK_YELLOW = 'DY', _('Dark Yellow')

  class NameChoice(models.TextChoices):
    NOVICE = 'NO', _('Novice')
    EXPLORER = 'EX', _('Explorer')
    ADVENTURER = 'AD', _('Adventurer')
    CHAMPION = 'CH', _('Champion')
    STAR = 'ST', _('Star')
    MASTER = 'MA', _('Master')
    TRACKER = 'TR', _('Tracker')
    SAVVY_SAVER = 'SS', _('Savvy Saver')
    EXCUSE_EXPERT = 'EE', _('Excuse Expert')
    MOTIVATIONAL_MENTEE = 'MM', _('Motivational Mentee')

  gem_name = models.CharField(
    max_length=2,
    choices=NameChoice.choices,
    null=False,
    blank=False)
  color_name = models.CharField(
    max_length=2,
    choices=ColorChoice.choices,
    null=False,
    blank=False)
  color_top = models.CharField(max_length=7)
  color_bottom = models.CharField(max_length=7)
  shape = models.CharField(
    max_length=1,
    choices=ShapeChoice.choices,
    null=False,
    blank=False
  )
  earned_text = models.CharField(max_length=200)
  page_total_required = models.PositiveSmallIntegerField()


class PageGem(models.Model):
  """
  Pre-defined lookup table that maps each Page to the Gem that could be
  earned (where applicable)
  """
  page_slug = models.CharField(max_length=50)
  gem = models.ForeignKey(Gem, related_name='pages', on_delete=models.CASCADE)


class PageRead(models.Model):
  """
  Represents a Page in process of being read by a User
  """
  class StatusChoice(models.TextChoices):
    UNREAD = 'U', _('Unread')
    READ = 'R', _('Read')

  user = models.ForeignKey(User, related_name='page_reads', on_delete=models.CASCADE)
  page = models.ForeignKey(Page, related_name='page_reads', on_delete=models.CASCADE)
  status = models.CharField(
    max_length=1,
    choices=StatusChoice.choices,
    null=False,
    blank=False,
    default=StatusChoice.UNREAD
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ['user', 'page']


class GemStatus(models.Model):
  """
  Represents the current status of a User's Gem collection.
  Updated upon writing to the PageRead table
  """
  user = models.ForeignKey(User, related_name='gem_statuses', on_delete=models.CASCADE)
  gem = models.ForeignKey(Gem, related_name='gem_statuses', on_delete=models.CASCADE)
  earned = models.BooleanField(null=False, default=False)

  class Meta:
    ordering = ['user']
