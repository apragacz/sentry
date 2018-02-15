# Mimic syncdb for Django 1.7 compatibility
from __future__ import absolute_import

from django.core.management.commands import syncdb
from optparse import make_option

from .syncdb import Command as SyncDbCommand  # NOQA


class Command(SyncDbCommand):
    option_list = syncdb.Command.option_list + (
        make_option('--no-migrate', action='store_false', dest='migrate', default=True,
                    help='Tells South to disable migrations after the sync. Default for during testing, and other internal calls.'),
    )
    if '--verbosity' not in [opt.get_opt_string() for opt in syncdb.Command.option_list]:
        option_list += (
            make_option('--verbosity', action='store', dest='verbosity', default='1',
                        type='choice', choices=['0', '1', '2'],
                        help='Verbosity level; 0=minimal output, 1=normal output, 2=all output'),
        )
