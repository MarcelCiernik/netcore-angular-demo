﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Server.DB.DBModels
{
    public class AnimalCategory
    {
        public string Name { get; set; }

    }
}
