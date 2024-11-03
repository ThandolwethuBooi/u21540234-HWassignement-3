using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PagedList;
using PagedList.Mvc;

namespace u21540234_HWassignement_3.Models
{
    public class studbookviewmodel
    {
        public IPagedList<student> students { get; set; }
        public IPagedList<book> books { get; set; }
        public IEnumerable<borrow> borrows { get; set; }
    }
}